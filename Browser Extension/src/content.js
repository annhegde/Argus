// content.js

function DOMtoString(selector) {
  var temp_var = document.getElementsByClassName("a3s");
  return temp_var[0].textContent;
}

// Execute the DOMtoString function and send the result to the background script
// Ensure script runs after DOM is loaded
// Ensure script runs after DOM is loaded
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'highlightKeywords') {
    const keywordsText = request.extractedKeywords;
    const keywords = keywordsLineIndex !== -1 ? lines.slice(keywordsLineIndex + 1) : [].map(keyword => keyword.trim());
    highlightKeywordsOnPage(keywords);
  }
});

function highlightKeywordsOnPage(keywords) {
  const escapedKeywords = keywords.map(keyword => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`\\b(${escapedKeywords.join('|')})\\b`, 'gi');

  const treeWalker = document.createTreeWalker(
    document.body, 
    NodeFilter.SHOW_TEXT, 
    { acceptNode: node => node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT },
    false
  );

  let currentNode;
  while ((currentNode = treeWalker.nextNode())) {
    const text = currentNode.nodeValue;
    const newHtml = text.replace(pattern, (match) => {
      // Create a span element for highlighting
      const span = document.createElement('span');
      span.style.backgroundColor = 'yellow'; // Set background color
      // Add more styles as needed (e.g., font-weight, color)
      span.textContent = match;
      return span.outerHTML;
    });

    if (newHtml !== text) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = newHtml;
      currentNode.parentNode.replaceChild(tempDiv.firstChild, currentNode);
    }
  }
}
# Argus
Argus is a browser extension that uses Gemini AI to analyse the websites you visit and your mail inbox, at your consent, for dark patterns and phishing scams to protect you while surfing the web.

![image](https://github.com/annhegde/Argus/assets/102428914/abb363d6-1d18-48f9-be22-048b62b27d74)

Have you ever felt like the websites you visit are playing a game with you ? 
Flashy buttons scream " Buy Now ! ", urgency timers tick down, and " limited quantities " taunt you. 
These are all tactics called dark patterns, designed to nudge you towards decisions you might not make otherwise.
Imagine spotting phishing emails in your inbox, flagged by the same tool ! 
Emails that mimic real companies, designed to steal your personal information. 
With a quick analysis, you can identify these attempts and avoid potential disaster !!

## Uses
The user has the options to login or signup or use the extension anonymously. 
The user can use it analyse websites for dark patterns and emails for phishing scams, by using the appropriate buttons on the extension's popup, at their discretion.
### Dark Pattern Detector 
> Whenever the user visits a webpage, they can click on the  "Analyse Dark Patterns" button which captures the screenshot of the webpage and uses Gemini Pro Vision API to analyse the website's screenshot.
> We prefer to take a screenshot, as web scraping or other similar approaches fail to  analyse images that could add to dark patterns like banners, and the spatial and positional aspects of elements on the webpage that contribute to the social engineering.
> The Output of the API response is then displayed on the side of screen as a popup, so as to not interrupt the user's interaction with the website.
> The response gives a highlight of all the instances of dark patterns on the screen while also giving a detailed explanation on the same, if the user wishes to read.
> The response is classified into major and minor dark patterns, with label of what type of dark pattern each instance is.
### Phishing scam detector
> The user can use the phishing scam detector to analyse their emails in their inbox, for phishing and other malicious instances.
> The user can choose if they wish to analyse an email in their inbox. If so, they can press the "Analyse Email" Button, which extracts the contents of the email and sends it to gemini AI through an API call, to analyse the same, for phishing and other malicious intents.
> The output response is displayed as a popup on the side.
### Script attack protection
> The extension constantly monitors as you browse through your emails, for unknown scripts injected into the email.
> If it finds an instance of the same, It prevents the scripts from running and moves the email to a folder called "quarantine". 

## Demo Video
[link](https://youtu.be/VqMuO7_Fw8g)

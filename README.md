# TranslateLicious

I completely forgot I worked on this until I started clearing out the files on my broken laptop. Basically, this guy contacted me for some [HTMLifier](https://sheeptester.github.io/htmlifier/) help, and eventually he wanted me to help him for free with some translation app.

I'll let him give the specs for the project. Note that all this occurred before the release of ChatGPT.

- I have a translation and speech based app, which I would like to improve. This improvement needs to be done to address the limitations in scratch features, and needs to be done within the HTML file.
- When it comes to Interactive translator application, would you be interested to assist me to make the translation part better? We might be able to blend the code into the created HTML file. 
- For the translator app, we need to find out how the translation and text to speech codes are incorporated in Scratch, and see what needs to be done to refine those sections in the converted html file. I believe that these sections include Google api. If yes, we need to adjust the code accordingly to enhance the speech output. You can compare how the output should be using our Android Apps, SoT and IoTranslate.
-   Instead of modifying scratch vm, I was more tilted towards modifying the minified VM code directly in the generated html code. This is where I was considering the option to incorporate the relevant translation feature. It can also give us the option to include other translation alternatives as well. When it comes to which part would require more work, the translation part appears to be fine. We need to focus more on the speech synthesis part, and MIT synthesis link works out better.
    
    Coming to this project, can you assist me to enhance what we have right now with the translator project? Now that we know how to improve the language locale for the speech synthesis part, can we bring that into our current code? It also appears that the link offers a way to save the generated sound byte. If that can be included, it would make the application more robust. Here is what I would like to implement to the Interactive (I)Translator application:
    
    1. Improve the already generated html code to refine the speech synthesis and translation parts in alignment with the github code/links shared
    2. Linearize the translation and speech synthesis parts into one synchronous block, if possible
    3. Include the ability to save the generated audio file within the html code - right now, the live android application includes a recorder created using java
-   **1. What do I mean by improvising the code?**        
    Here is our current application that is certainly functional and useful. However, we need to improve the performance of this application. We have also made an android application that is live as well.
        
    [Interactive (i) Translator](https://www.youtube.com/watch?v=LXRUmzArqAQ)
    
    As mentioned before, the tts part does not bring out the locale settings properly. For that reason, we need to manually code the tts section and if necessary, the translation part using the get command from the url that you had mentioned. We need to incorporate this code into the generated html code. For now, we will use the mit links. However, the number of languages might be limited. In the future, we might have to look for alternatives to increase the language size. 
    
    Here is a good reference on this front: [Getting Url using Get request](https://stackoverflow.com/questions/247483/http-get-request-in-javascript)
    
    **What project is this one?**        
    Here is the project code: 543992950
    
    **What kind of improvisation?**        
    -> Have a drop down list for starting and ending languages so that the user can select the list upfront.           
    -> Once languages are selected, the user can either dictate or type the content, and then upon pressing the translate button, the translation should happen, and the speech should also start. As this speech synthesis part offers a way to save the file, upon completion of the speech part, the mp3 file should become available. I have shared a video of a demo of an audio recorder that I have created for testing purposes.
    
    **2. Linearize the translation and speech synthesis parts into one synchronous block, if possible**
    
    Yes. You got it right - it is about connecting the translation and speech together. It need not be on the server side. With Get request, we might be able to get this done on the client side as well. 
    
    **What do I mean by synchronous?**  
    It is more in terms of the performance of the application rather than the js itself. In other ways, we need to make this process of translation and speech to be a coordinated process where the incoming text is smoothly translated, shows up in the text area and then also speech synthesized automatically as mentioned above. While the speech is heard, the audio recorder needs to start automatically, and if possible, stop once the speech gets done (automatically and/or manually).  After this process gets over, the recorded audio seekbar should show up as shown in the video, and the audio should be available for download.
-   If you have not seen this before, this link might be of some use for the improvement section.
    
    https://www.npmjs.com/package/scratch-translate-extension-languages
-   However, I believe that there is a mismatch between the number of languages for tts compared to that for translation, and also the locale settings appear to be off. This results in some languages not functioning as it should.
    
    Let us take this example:
    
    Translation using Google Translate:  
    English:  
    How are you doing? How to enhance the functionality of translation using this tool?  
    Polish:  
    Jak się masz? Jak zwiększyć funkcjonalność tłumaczenia za pomocą tego narzędzia?
    
    Using Scratch:
    
    Screenshot from 2021-08-13 11-43-16-scratchtranslation.png
    
    Can you try this text at this link, and hear the output?  
    https://scratch.mit.edu/projects/543992950/
    
    Try the same over here, and you would find the difference:  
    https://synthesis-service.scratch.mit.edu/synth?locale=pl-PL&gender=female&text=Jak%20si%C4%99%20masz?%20Jak%20zwi%C4%99kszy%C4%87%20funkcjonalno%C5%9B%C4%87%20t%C5%82umaczenia%20za%20pomoc%C4%85%20tego%20narz%C4%99dzia?
    
    You would see a difference, though the synthesizer should be identical. This is what I would like to fix.
    
    Here is the list of languages that were mentioned under Scratch Wiki -    
    https://en.scratch-wiki.info/wiki/Translate_Extension
    
    This is a list of languages for tts based on the github page - Can you check to see whether any of the other languages from the above list that are not listed below is functional using the tts MIT link?
    
    Screenshot from 2021-08-13 11-10-11_ttsscratchlanguages.png
    
    For the second part, yes, that is what I was thinking of doing - pure vanilla js, which is why I shared the "Get" link.  This works out even better. - Excellent!! Can you expand the code that you shared to include a drop down list of languages, and share the file for me to test from my end?
    
    Once that is done, we can look into html5 based tools to address dictation, and tts so that we can opt out of mit synthesizer? We still may have to use the translator though. This is the more challenging second phase that I had mentioned in the previous email.
-   I had some time to test the shared code and that works. Here are some suggestions to make it a more finished version.
    
    Have drop downs for source and translate languages, which the user need to select before they can do anything.
    
    If they select translate box, then there should be two boxes side by side with source language on the left, and translated language on the right. Upon entering the text and pressing the translate icon, the translated text should populate on the right side. 
    
    Also, have icons for speech, save as mp3, wav, ogg for both the sides. If we can include microphone for dictation, then that would be great.
    
    Can you make the user interface responsive, friendly and distinctly unique?
-   Here are things to do:
    1. Can you add a nice background - gif to showcase that this is a translation application?
    2. For options, include the words in local language as well - something like this,  
            `<option value="ar">Arabic/العربية</option>`  
            `<option value="ja">Japanese/日本語</option>`
    3. Have the text area in two pleasant colors, and the text color in alignment with background color - for example, if you use blue for the background for one side, use a yellow text color to be clearly visible
    4. For different sections such as speech, translate, can you use images instead of text? Here are some images that you can use:
    
        microphone-2104091_640.png speech-icon-2797263_640.png globe-110775_640.jpg
    5. We will have two parts - in the first part, we will strictly limit the application to mit -synthesis and translation with s2t webspeech api; for the second part, we will use webspeech api for both tts and s2t (dictation). Web speech api offers both tts, and s2t features.
    6. Blend the js script that you had shared before after refinement in alignment with our html code.
    7. Come up with a nice name that we can use for the product
    8. Right now, we still need the internet to make this application work - can we see whether we can use npmjs link to skip dependence on the internet
    
    These are some of the names already I have used - SoT, IoTranslate, Interactive Translator for the three applications in this space so far.
- \#8. We will work on this, if it is not relatively straightforward, after we get done with the two parts mentioned even if it requires internet. In this way, we will have two functional applications live beforehand, which we can build upon for the next phase.
-   I got to work on this one further, and have shared the zip file with you. Check it out. I noticed that the mobile version is not responsive yet and one of the text areas is getting truncated with the new design. If you can look into that one, and make it responsive, that would be great. Also, share your thoughts on the current design so that we can improve it further. I also removed the three audio file format buttons, as the generated audio appears to have only one format. 
    
    Now, we need to add the web speech part for both sides. Can you find that one from your end? If not, let me know, and I can share some references. Personally, I would prefer you to research from your end, as that would enable you to blend this part of the code with what we have better.
    
    When it comes to offline translation, I might know of some other options. We did research over the years on this front, and have accrued know-how on this front. I will share that info after we get done with this phase.
    
    Things to do:
    1. Address the responsiveness of the current version, and make any changes to the current design
    2. Add web speech part for both sides - For the translated language, we will have two ways to get the translated text read out - one through the mit synthesizer (which we already have), and another through web speech api. I believe that I first started using web speech in 2013 or so. Having been in use for some years now, though compatibility is a concern as you pointed out, it might not be as much a concern now as it was 8 years ago. 
    
    For that matter, I was also concerned about using fetch api as it was relatively a newer addition to the browsers. However, I believe that fetch api has been in place for some time now. Just to be safe, we might need to be certain that there would not be any restrictions with fetch api across different browsers.
    
    By the way, I have named this application as, "TranslateLicious", for now. If you have a better name, let me know.
-   Two more things: Once we make this application fully functional, we will do the following:
    
    Can you look into obfuscating the code, and reduce possibility for XSS using escape characters?
    
    If possible, let us convert the final code to a php, and separate the css and js to separate files?
    
    We will have four versions, which I usually do-
     
    the pure html version without any Obfuscation and Escape characters as a single file - used for internal testing purposes and improvements
    
    As multiple files (js, css, html/php) (increase a level of safety and security)
    
    Then, one with obfuscation and escape (second level of safety/security) characters for both single and complete files
    
    Fourth, the php version (further enhancement)
    
    Once we have this set, please also briefly document the obfuscation tool utilized and the escape characters added in a document file, and share. Usually, the level of obfuscation could impact the performance of the website.  We will retain this for record keeping. Upon obfuscation, confirm whether the website works as before.
    
    Though these steps might seem unnecessary, security and safety are essential elements that get missed out by a large group of developers. This is also what differentiates a good developer from a great one.
- I got additional information about the MIT tts, and as I had mentioned, there is a word limit, which further calls for us adding the web speech api as well.
- I was able to make the new version completely responsive.
- For some aspects mentioned, without going into all the details, splitting to different files, escape characters, and adding php version (which is as simple as what you stated) could hinder certain lesser programming erudite sections from copying the code, and could even act as a barrier to automated web scraping tools to some extent. 
- By the way, drop downs for languages are not visible. We also need the tts button and functionality added for the translated language.
- A few more things that came to mind.

  1. As MIT translate feature is more extensive, can we have different number of languages based on language availability - for example, for MIT, we will include all 48 for translation, while throwing a message that the tts is unavailable for languages that are not in the list. 

  2. In the same way,  for web speech api - dictation and tts, the number of languages are different. For dictation, in addition to languages, there is an extensive list of locales too, which needs to be included. For tts, web speech api also offers pitch and speed features, which needs to be added. These add-on features need to show up only when that button gets clicked otherwise display needs to be none.

  For this to work effectively, if we can have different drop downs based on the button selected, that would be great.
-   I tested the application, and it looks good. 
    
    
    **Things to be addressed:**
    1. Please make sure that the languages on both sides are listed the same way. Lists appear to be different.
    2. Translation & TTS are not working properly - it works sometimes, and for only some languages - make sure that the js is set right for both sides
    3. I like the pitch and speed sections that you have added 
    4. Can the audio section be set to center for both sides when it shows up?
    5. Instead of audios getting added on, can we replace the older audio with the newer one? In this way, only one audio shows up on the page - one each for source and destination languages after the user clicks the tts button..
    
    
    **Next Step:**  
    For both sides, we need to add web speech api. One on the left side, it will be the dictation part for which there is already a button, and on the right side, it will be tts for which we need to create a new button. Would you like me to share some references for that?
-   I would like to share this application, which is a variant of what we had before. In this one, we are using an open source translation engine that we are looking into running on our server. Check it out, and share your feedback.
    
    https://aioradar.com/translatology
-   For #1: 
    Can we split this into three parts with a Navbar or a drop down button or a selection button, which will result in a different drop down list based on language availability.
    
    I. one for just translation alone
    II. translation with audio
    iii. dictation - web speech tts has a different list that the first two
    
    #2:
    When it comes to which languages, I need to check again. Once we have #1 done, I will test again and let you know.
    
    Also, the zip file that you shared is lacking icons and background video (check attached image). Please incorporate those as well. 
- For dictation part, we will include the corresponding tts element as well with the ability to save the mp3 file.    
-   I have made the current version live after making a few changes. Please check out this link -
    
    https://aioradar.com/translaticious
    
    I noticed that even after making some changes, a section of the website is not completely responsive on both the desktop and mobile devices. While making changes, please also look into this aspect.
    
    I am also seeing a CORS issue, which is preventing translation from working. Check to see whether you are seeing the same issue from your end.
    
    ```
    ----------------------------------------------
    Access to fetch at 'https://translate-service.scratch.mit.edu/translate?language=pl&text=How+are+you+doing%3F+How+to+enhance+the+functionality+of+translation+using+this+tool%3F' from origin 'https://www.aioradar.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
    main.js:103 GET https://translate-service.scratch.mit.edu/translate?language=pl&text=How+are+you+doing%3F+How+to+enhance+the+functionality+of+translation+using+this+tool%3F net::ERR_FAILED
    (anonymous) @ main.js:103
    main.js:112   Uncaught (in promise) TypeError: Failed to fetch
    async function (async)
    (anonymous) @ main.js:110
    www.aioradar.com/:1 Access to fetch at 'https://translate-service.scratch.mit.edu/translate?language=pl&text=How+are+you+doing%3F+How+to+enhance+the+functionality+of+translation+using+this+tool%3F' from origin 'https://www.aioradar.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
    main.js:103 GET https://translate-service.scratch.mit.edu/translate?language=pl&text=How+are+you+doing%3F+How+to+enhance+the+functionality+of+translation+using+this+tool%3F net::ERR_FAILED
    -----------------------------------------
    ```
-   Fyi - on cors issue:
    
    I found out from MIT that there is some quota, which results in the cors issue. For that reason, we have to be careful on making sure that this application is not cloned, copied or misused by others. 
-   However, responsiveness was the issue that needs to be addressed.
    
    Coming to the reason for splitting up to three:
    
    Though the LHS drop down is used only for tts, people could still type the text in their language of interest. Unlike Google translate or other established translation pages, in this version, we are limited on the third-party provider for languages, and as the tts list is not the same as that for simple translation, I believe that it would be better to split to three parts with one for typing based translation alone, another with tts, and the third one with speech recognition would be ideal.
    
    When it comes to speech recognition list, please see attached images. I had created an app before specifically for speech recognition. I will share that one soon.
    
    For dictation, once an user dictates in his/her language of choice provided it is available in the list of languages, we will give the option to save that text as audio as well..Basically, same as what we have now, but the drop down list will be for only those languages available through web speech api.
    
    By the way, to have speech recognition continuous, there is an option called speechrecognizer.continuous="true" where speech recognizer is the variable for webkitspeechrecognition, which is supposed to assist in not truncating the speech recognition part.
-   Here is the app that I had mentioned -  
    https://aioradar.com/dictation    

Afterwards, university started, and I ghosted him.

If you would like to learn more about this fellow, check out his services here:

> You can know more about me here -
> 
> https://www.srikanthkidambi.com/home
> 
> You can also see some of our product ecosystem here -
> 
> https://www.legaldhoom.com

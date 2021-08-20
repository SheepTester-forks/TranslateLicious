<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>TranslateLicious</title>
    <meta name="description" content="Translation dictation" />

    <link rel="stylesheet" href="./styles.min.css" />
  </head>
  <body>
    <video autoplay muted loop id="myVideo">
      <source src="welcome.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>

    <div class="content">
      <br />
      <h1>TranslateLicious</h1>
      <br /><br />
      <div class="container">
        <div class="panel source">
          <div class="custom-select" align="center">
            <select id="source-language">
              <option value="ar">Arabic/العربية</option>
              <option value="zh-cn">Chinese (Mandarin)/中文（國語）</option>
              <option value="da">Danish/Dansk</option>
              <option value="nl">Dutch/Nederlands</option>
              <option value="en" selected>English</option>
              <option value="fr">French/Français</option>
              <option value="de">German/Deutsch</option>
              <option value="is">Icelandic/Íslenska</option>
              <option value="it">Italian/Italiano</option>
              <option value="ja">Japanese/日本語</option>
              <option value="ko">Korean/한국어</option>
              <option value="nb">Norwegian/Norsk Bokmål</option>
              <option value="pl">Polish/Polski</option>
              <option value="pt">Portuguese/Português</option>
              <option value="ro">Romanian/Română</option>
              <option value="ru">Russian/Русский</option>
              <option value="es">Spanish/Español</option>
              <option value="sv">Swedish/Svenska</option>
              <option value="tr">Turkish/Türkçe</option>
              <option value="cy">Welsh/Cymraeg</option>
              <option value="ca">Catalan/Català</option>
            </select>
          </div>
          <textarea
            id="source"
            cols="30"
            rows="10"
            style="background-color:navyblue;font-family:verdana;color:yellow; font-size:1.1em"
          >
How are you doing? How to enhance the functionality of translation using this tool?</textarea
          >
          <div>
            <button style="border-radius: 54%" id="source-speech">
              <img src="speech.png" alt="Speaking person." class="icon" />
            </button>
            <!--<button id="source-save-mp3">save as mp3</button>
          <button id="source-save-wav">save as wav</button>
          <button id="source-save-ogg">save as ogg</button>-->
            <button style="border-radius: 54%" id="dictate">
              <img src="microphone.png" alt="Microphone." class="icon" />
            </button>
          </div>
        </div>
        <button id="translate" style="border-radius: 54%">
          <img
            src="globe.jpg"
            alt='Globe of "Translate" in various languages with world map overlaid.'
            class="icon"
          />
        </button>

        <div class="panel translation">
          <div class="custom-select" style="width:200px;text-align:center">
            <select id="target-language">
              <option value="ar">Arabic/العربية</option>
              <option value="zh-cn">Chinese (Mandarin)/中文（國語）</option>
              <option value="da">Danish/Dansk</option>
              <option value="nl">Dutch/Nederlands</option>
              <option value="en">English</option>
              <option value="fr">French/Français</option>
              <option value="de">German/Deutsch</option>
              <option value="is">Icelandic/Íslenska</option>
              <option value="it">Italian/Italiano</option>
              <option value="ja">Japanese/日本語</option>
              <option value="ko">Korean/한국어</option>
              <option value="nb">Norwegian/Norsk Bokmål</option>
              <option value="pl" selected>Polish/Polski</option>
              <option value="pt">Portuguese/Português</option>
              <option value="ro">Romanian/Română</option>
              <option value="ru">Russian/Русский</option>
              <option value="es">Spanish/Español</option>
              <option value="sv">Swedish/Svenska</option>
              <option value="tr">Turkish/Türkçe</option>
              <option value="cy">Welsh/Cymraeg</option>
              <option value="ca">Catalan/Català</option>
            </select>
          </div>
          <textarea
            id="translated"
            cols="30"
            rows="10"
            style="background-color:lightyellow;font-family:verdana;color:blue; font-size:1.1em"
            readonly
          ></textarea>
          <div>
            <button id="translated-speech" style="border-radius: 54%">
              <img src="speech.png" alt="Speaking person." class="icon" />
            </button>
            <!-- <button id="translated-save-mp3">save as mp3</button>
          <button id="translated-save-wav">save as wav</button>
          <button id="translated-save-ogg">save as ogg</button>-->
          </div>
        </div>
      </div>
      <br />
      <button
        id="myBtn"
        style="background-color:yellow; color:blue"
        onclick="myFunction()"
      >
        Pause
      </button>
    </div>
    <script src="./main.min.js"></script>
  </body>
</html>

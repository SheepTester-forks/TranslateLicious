const languages = {
  ar: ['ar', 'arb'],
  'zh-cn': ['zh-tw', 'cmn-CN'],
  da: ['da', 'da-DK'],
  nl: ['nl', 'nl-NL'],
  en: ['en', 'en-US'],
  fr: ['fr', 'fr-FR'],
  de: ['de', 'de-DE'],
  is: ['is', 'is-IS'],
  it: ['it', 'it-IT'],
  ja: ['ja', 'ja-JP'],
  ko: ['ko', 'ko-KR'],
  nb: ['nb', 'nb-NO'],
  pl: ['pl', 'pl-PL'],
  pt: ['pt', 'pt-PT'],
  ro: ['ro', 'ro-RO'],
  ru: ['ru', 'ru-RU'],
  es: ['es', 'es-ES'],
  sv: ['sv', 'sv-SE'],
  tr: ['tr', 'tr-TR'],
  cy: ['cy', 'cy-GB'],
  ca: ['ca', 'ca-CA']
}

// Tell the browser to prepare the list of voices early
speechSynthesis.getVoices()

function handleSpeech (speechBtn, textarea, language) {
  speechBtn.addEventListener('click', () => {
    let locale = languages[language.value][1]

    const audio = new Audio()
    audio.src =
      'https://synthesis-service.scratch.mit.edu/synth?' +
      new URLSearchParams({
        locale,
        gender: 'female',
        text: textarea.value
      })
    audio.controls = true
    textarea.parentNode.append(audio)

    if (locale === 'cmn-CN') {
      locale = 'zh-TW'
    }
    const voice = speechSynthesis
      .getVoices()
      .find(
        voice =>
          voice.lang === locale || voice.lang.slice(0, 2) === locale.slice(0, 2)
      )
    const utterance = new SpeechSynthesisUtterance(textarea.value)
    utterance.lang = locale
    utterance.voice = voice
    window.speechSynthesis.speak(utterance)
  })
}

document.getElementById('translate').addEventListener('click', async () => {
  const { result } = await fetch(
    'https://translate-service.scratch.mit.edu/translate?' +
      new URLSearchParams({
        language:
          languages[document.getElementById('target-language').value][0],
        text: document.getElementById('source').value
      })
  ).then(response => response.json())
  document.getElementById('translated').value = result
})

handleSpeech(
  document.getElementById('source-speech'),
  document.getElementById('source'),
  document.getElementById('source-language')
)
handleSpeech(
  document.getElementById('translated-speech'),
  document.getElementById('translated'),
  document.getElementById('target-language')
)

var video = document.getElementById('myVideo')
var btn = document.getElementById('myBtn')

function myFunction () {
  if (video.paused) {
    video.play()
    btn.innerHTML = 'Pause'
  } else {
    video.pause()
    btn.innerHTML = 'Play'
  }
}

var x, i, j, l, ll, selElmnt, a, b, c
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName('custom-select')
l = x.length
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName('select')[0]
  ll = selElmnt.length
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement('DIV')
  a.setAttribute('class', 'select-selected')
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
  x[i].appendChild(a)
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement('DIV')
  b.setAttribute('class', 'select-items select-hide')
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
create a new DIV that will act as an option item:*/
    c = document.createElement('DIV')
    c.innerHTML = selElmnt.options[j].innerHTML
    c.addEventListener('click', function (e) {
      /*when an item is clicked, update the original select box,
  and the selected item:*/
      var y, i, k, s, h, sl, yl
      s = this.parentNode.parentNode.getElementsByTagName('select')[0]
      sl = s.length
      h = this.parentNode.previousSibling
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i
          h.innerHTML = this.innerHTML
          y = this.parentNode.getElementsByClassName('same-as-selected')
          yl = y.length
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute('class')
          }
          this.setAttribute('class', 'same-as-selected')
          break
        }
      }
      h.click()
    })
    b.appendChild(c)
  }
  x[i].appendChild(b)
  a.addEventListener('click', function (e) {
    /*when the select box is clicked, close any other select boxes,
and open/close the current select box:*/
    e.stopPropagation()
    closeAllSelect(this)
    this.nextSibling.classList.toggle('select-hide')
    this.classList.toggle('select-arrow-active')
  })
}
function closeAllSelect (elmnt) {
  /*a function that will close all select boxes in the document,
except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = []
  x = document.getElementsByClassName('select-items')
  y = document.getElementsByClassName('select-selected')
  xl = x.length
  yl = y.length
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove('select-arrow-active')
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add('select-hide')
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener('click', closeAllSelect)

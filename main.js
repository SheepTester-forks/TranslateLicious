const languages = {
  am: ['am', null],
  ar: ['ar', 'ar'],
  az: ['az', null],
  bg: ['bg', null],
  ca: ['ca', null],
  cs: ['cs', null],
  cy: ['cy', 'cy'],
  da: ['da', 'da'],
  de: ['de', 'de'],
  el: ['el', null],
  en: ['en', 'en'],
  es: ['es', 'es'],
  'es-419': ['es-419', 'es-419'],
  et: ['et', null],
  eu: ['eu', null],
  fa: ['fa', null],
  fi: ['fi', null],
  fr: ['fr', 'fr'],
  ga: ['ga', null],
  gd: ['gd', null],
  gl: ['gl', null],
  he: ['he', null],
  hi: ['hi', 'hi'],
  hr: ['hr', null],
  hu: ['hu', null],
  id: ['id', null],
  is: ['is', 'is'],
  it: ['it', 'it'],
  ja: ['ja', 'ja'],
  ko: ['ko', 'ko'],
  lt: ['lt', null],
  lv: ['lv', null],
  mi: ['mi', null],
  nb: ['nb', 'nb'],
  nl: ['nl', 'nl'],
  pl: ['pl', 'pl'],
  pt: ['pt', 'pt'],
  'pt-br': ['pt-br', 'pt-br'],
  ro: ['ro', 'ro'],
  ru: ['ru', 'ru'],
  sk: ['sk', null],
  sl: ['sl', null],
  sr: ['sr', null],
  sv: ['sv', 'sv'],
  th: ['th', null],
  tr: ['tr', 'tr'],
  uk: ['uk', null],
  vi: ['vi', null],
  'zh-cn': ['zh-cn', 'zh-cn'],
  'zh-tw': ['zh-tw', null],
  zu: ['zu', null]
}

// Tell the browser to prepare the list of voices early
speechSynthesis.getVoices()

function handleSpeech (
  speechBtn,
  textarea,
  language,
  optionsWrapper,
  pitch,
  rate
) {
  optionsWrapper.style.display = 'none'
  speechBtn.addEventListener('click', () => {
    const locale = languages[language.value][1]
    if (locale === null) {
      alert('tts is unavailable for languages that are not in the list')
      return
    }
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

    const voice = speechSynthesis
      .getVoices()
      .find(
        voice =>
          voice.lang === locale || voice.lang.slice(0, 2) === locale.slice(0, 2)
      )
    const utterance = new SpeechSynthesisUtterance(textarea.value)
    utterance.lang = locale
    utterance.voice = voice
    utterance.pitch = pitch.value
    utterance.rate = rate.value
    console.log(utterance)
    window.speechSynthesis.speak(utterance)

    optionsWrapper.style.display = null
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
  document.getElementById('source-language'),
  document.getElementById('source-speech-synthesis-options'),
  document.getElementById('source-pitch'),
  document.getElementById('source-rate')
)
handleSpeech(
  document.getElementById('translated-speech'),
  document.getElementById('translated'),
  document.getElementById('target-language'),
  document.getElementById('translated-speech-synthesis-options'),
  document.getElementById('translated-pitch'),
  document.getElementById('translated-rate')
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

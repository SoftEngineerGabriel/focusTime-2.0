import Sound from "./sound.js"

const sound = Sound()

let buttonPlay = document.querySelector('.play')
let buttonStop = document.querySelector('.stop')
let secondsDisplay = document.querySelector('.seconds')
let minutesDisplay = document.querySelector('.minutes')
let buttonAumentar = document.querySelector('.aumentar')
let buttonDiminuir = document.querySelector('.diminuir')
let buttonCardFloresta = document.querySelector('.cardFloresta')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut


function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}



function countdown(){
  timerTimeOut = setTimeout(function() {
    let seconds =  Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    secondsDisplay.textContent = "00"
    
    if(minutes <= 0){
        return
      }
      

      if( seconds <= 0 ) {
        seconds = 60
        
        minutesDisplay.textContent = String(minutes -1).padStart(2, "0")
      }
      
      secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
      
      countdown()
      
    }, 1000)
    
  }
  
  buttonPlay.addEventListener('click', function(){
    countdown()
    sound.buttonPressAudio.play()
  })
  
  buttonStop.addEventListener('click', function(){
    resetTimer()
    sound.buttonPressAudio.play()
  })

  buttonAumentar.addEventListener('click', function(){
      let minutes = Number(minutesDisplay.textContent)
      minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
      sound.buttonPressAudio.play()
  })
  
  buttonDiminuir.addEventListener('click', function(){
      let minutes = Number(minutesDisplay.textContent)
      minutesDisplay.textContent = String(minutes -5).padStart(2, "0")
      sound.buttonPressAudio.play()
  
      if(minutes <= 0){
          minutesDisplay.textContent = "00"
      }
  })


  buttonCardFloresta.addEventListener('click', function(){
    sound.buttonPressAudio.play()
    sound.buttonPressFloresta.play()
  })


let buttonPlay = document.querySelector('.play')
let secondsDisplay = document.querySelector('.seconds')
let minutesDisplay = document.querySelector('.minutes')
let buttonAumentar = document.querySelector('.aumentar')
let buttonDiminuir = document.querySelector('.diminuir')
let minutes

buttonAumentar.addEventListener('click', function(){
    let minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes + 1).padStart(2, "0")
})

buttonDiminuir.addEventListener('click', function(){
    let minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes -1).padStart(2, "0")

    if(minutes <= 0){
        minutesDisplay.textContent = "00"
    }
})

function countdown(){
    setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      secondsDisplay.textContent = "00"

      if(minutes <= 0){
        return
      }
      

      if( seconds <= 0 ) {
        seconds = 2

        minutesDisplay.textContent = String(minutes -1).padStart(2, "0")
      }
      
      secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
      
      countdown()

    }, 1000)

  }

  buttonPlay.addEventListener('click', function(){
    countdown()
})
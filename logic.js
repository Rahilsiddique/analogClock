setInterval(setClock,1000)

const hourHand=document.querySelector('[data-hour-hand]')
const minuteHand=document.querySelector('[data-minute-hand]')
const secondHand=document.querySelector('[data-second-hand]')
function setClock(){
    const currentDate=new Date();
    const SecondsRatio=currentDate.getSeconds()/60;
    const minutesRatio=(SecondsRatio+currentDate.getMinutes())/60;
    const hoursRation=(minutesRatio+currentDate.getHours())/12;
    setRotation(secondHand,SecondsRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hourHand,hoursRation)
}

function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360)
}

setClock();
function $(e) {
    return document.querySelector(e)
}

// setInterval(setClock, 1000)

// const hourHand = $('#hour-hand')
// const minuteHand = $('#minute-hand')
// const secondHand = $('#second-hand')

// function setClock() {
//     const currentDate = new Date()
//     const secondsRatio = currentDate.getSeconds() / 60
//     const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
//     const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

//     setRotation(secondHand, secondsRatio)
//     setRotation(minuteHand, minutesRatio)
//     setRotation(hourHand, hoursRatio)
// }

// function setRotation(element, rotationRatio){
//     element.style.setProperty('--rotation', rotationRatio * 360)
// }

// setClock()




setInterval(() => {
    const deg = 6
    const hour = $('#hour-hand')
    const minute = $('#minute-hand')
    const second = $('#second-hand')

    let day = new Date()
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg
    let ss = day.getSeconds() * deg

    hour.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`
    minute.style.transform = `rotateZ(${mm}deg)`
    second.style.transform = `rotateZ(${ss}deg)`
})




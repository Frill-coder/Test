const city = 'Москва'
const temp = '24'
function showTemperature () {
    console.log(`Сейчас в ${city} температура - ${temp} градусов по Цельсию`)
}

showTemperature()

const learnSpeed = (speed) => {
    if (speed > 299792458) {
        console.log("Сверхсветовая скорость")
    }
    else if (speed < 299792458) {
        console.log("Субсветовая скорость")
    }
    else if (speed === 299792458) {
        console.log("Скорость света")
    }
}

learnSpeed(29979245)


let product = "Вишнёвый торт"
let value = "990"
function check (budget) {
    if (budget > value) {
        console.log(`${product} приобретён. Спасибо за покупку!`)
    }
    else if (budget < value) {
        let lack = value - budget
        console.log(`Вам не хватает ${lack}, пополните баланс`)
    }
}
check(10)
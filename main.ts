let x = 4
let y = 4
basic.forever(function () {
    if (x > 0) {
        led.plot(x, y)
        basic.pause(100)
        for (let index = 0; index < 4; index++) {
            led.plot(x - 1, y)
            basic.pause(100)
            x = x - 1
        }
    } else {
        y = y - 1
        led.plot(x, y)
        basic.pause(100)
        for (let index = 0; index < 4; index++) {
            led.plot(x + 1, y)
            x = x + 1
            basic.pause(100)
        }
        y = y - 1
    }
})

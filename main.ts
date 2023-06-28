let number = 0
input.onGesture(Gesture.Shake, function () {
    number = randint(1, 3)
    if (number == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            . . # . .
            `)
    } else if (number == 2) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
	
})

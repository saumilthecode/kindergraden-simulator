let number = 0
input.onGesture(Gesture.Shake, function () {
    number = randint(1, 6)
    basic.showNumber(number)
})
basic.forever(function () {
	
})

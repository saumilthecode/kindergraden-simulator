input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.InBackground)
    basic.showString("drunk person threatening me! call police")
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.InBackground)
    basic.showString("she fainted! call ambulance")
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.InBackground)
    basic.showString("fire fire! call firefighters")
})
basic.forever(function () {
	
})

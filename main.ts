input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.ScreenUp, function () {
    game.resume()
})
input.onGesture(Gesture.ScreenDown, function () {
    game.pause()
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Player.change(LedSpriteProperty.Y, -1)
})
let Player: game.LedSprite = null
let cactus = game.createSprite(2, 2)
Player = game.createSprite(1, 2)
basic.forever(function () {
    basic.pause(500)
    cactus.set(LedSpriteProperty.X, randint(1, 5))
    cactus.set(LedSpriteProperty.Y, randint(1, 5))
    basic.pause(500)
    game.addScore(1)
    if (Player.isTouching(cactus)) {
        game.gameOver()
        soundExpression.sad.play()
    }
})

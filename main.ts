namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, football_star, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    game.over(false)
})
let barrel: Sprite = null
let projectile: Sprite = null
let football_star: Sprite = null
info.setScore(0)
game.splash("burger battle")
football_star = sprites.create(img`
. . . . 2 2 2 2 2 e . . . . . . 
. . . 2 2 2 2 d 2 2 e . . . . . 
. . e 2 2 2 2 2 2 2 e . . . . . 
. . e 2 2 2 2 2 2 2 e . . . . . 
. . e 2 2 2 2 2 e f f c c . . . 
. . e e 2 2 e f f f f b c . . . 
. e e e f e 2 b f f f d c . . . 
e e 2 2 d f 2 1 1 1 1 b c . . . 
e e 2 2 d f e e c c c . . . . . 
b 1 1 d e 2 2 e e c . . . . . . 
. f f e 2 2 2 2 e . . . . . . . 
. . f f d d 2 2 f f d d . . . . 
. . f f d d e e f f d d . . . . 
. . . f f f f . . . . . . . . . 
. . e e e f f f . . . . . . . . 
. . e e e e f f f . . . . . . . 
`, SpriteKind.Player)
football_star.setPosition(14, 57)
controller.moveSprite(football_star)
football_star.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(500, function () {
    barrel = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e e e . . . . . 
. . . 4 f f f f f f f f 4 . . . 
. . . e e e e e e e e e e . . . 
. . . e f f f f f f f f e . . . 
. . . e e e e e e e e e e . . . 
. . . e f f f f f f f f e . . . 
. . . 4 e e e e e e e e 4 . . . 
. . . . . e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    barrel.setVelocity(-100, 0)
    barrel.setPosition(180, Math.randomRange(0, 120))
})

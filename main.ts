let mySprite = sprites.create(transformSprites.scale2x(assets.image`lil bacteria`), SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
forever(function () {
    if (controller.right.isPressed()) {
        transformSprites.changeRotation(mySprite, 3)
    } else if (controller.left.isPressed()) {
        transformSprites.changeRotation(mySprite, -3)
    } else if (controller.up.isPressed()) {
    	
    } else {
    	
    }
    spriteutils.setVelocityAtAngle(mySprite, spriteutils.degreesToRadians(transformSprites.getRotation(mySprite)), 100)
})

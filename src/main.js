import k from "./kaplayCtx";
import world from "./scenes/world.js";

k.loadSprite("assets", "./assets/tilesets/tileset.png", {
    sliceX: 39,
    sliceY: 35.9,
    anims: {
        "player-idle-down": 1071,
        "player-down": {
            from: 1071,
            to: 1076,
            loop: false,
        },
        "player-idle-side": 1053,
        "player-side": {
            from: 1053,
            to: 1058,
            loop: false,
        },
        "player-idle-up": 1059,
        "player-up": {
            from: 1059,
            to: 1064,
            loop: false,
        },
        "enemy-idle-down": 775,
    },
});

const scenes = {
    world,
};

for (const sceneName in scenes) {
    k.scene(sceneName, () => scenes[sceneName](k));
}

k.go("world");   

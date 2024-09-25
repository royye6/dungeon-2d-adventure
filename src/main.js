import k from "./kaplayCtx";
import world from "./scenes/world.js";

k.loadSprite("assets", "./assets/tilesets/tileset.png", {
    sliceX: 39,
    sliceY: 36,
});

const scenes = {
    world,
};

for (const sceneName in scenes) {
    k.scene(sceneName, () => scenes[sceneName](k));
}

k.go("world");   

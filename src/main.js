import k from "./kaplayCtx";
import world from "./scenes/world.js";

k.loadSprite("assets", "./assets/tilesets/tileset.png", {
    sliceX: 41,
    sliceY: 37,
});

const scenes = {
    world,
};

for (const sceneName in scenes) {
    k.scene(sceneName, () => scenes[sceneName](k));
}

k.go("world");

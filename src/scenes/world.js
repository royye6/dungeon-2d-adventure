import { generatePlayerComponents } from "../entities/player";
import { drawTiles, fetchMapData, insertBackgroundColour } from "../utils";

async function world(k) {
    insertBackgroundColour(k, 40, 40, 10);

    const mapData = await fetchMapData("./assets/maps/world.json");

    const map = k.add([k.pos(-550, -320)]);

    const entities = {
        player: null,
        enemies: [],
    };
    
    const layers = mapData.layers;
    for (const layer of layers) {
        // console.log(layer.name)
        if (layer.name === "Collisions") {
            continue;
        }

        if (layer.name === "SpawnPoints") {
            for (const object of layer.objects) {
                if (object.name === "Player ") {
                    entities.player = k.add(generatePlayerComponents(k, k.vec2(object.x, object.y)))
                    continue;
                }
            }
            continue;
        }

        drawTiles(k, map, layer, mapData.tileheight, mapData.tilewidth)

        k.camScale(2.3)
    }
}

export default world;

import { generateEnemyComponents } from "../entities/enemy";
import { generatePlayerComponents } from "../entities/player";
import { drawCollisions, drawTiles, fetchMapData, insertBackgroundColour } from "../utils";

async function world(k) {
    insertBackgroundColour(k, 40, 40, 10);

    const mapData = await fetchMapData("./assets/maps/world.json");

    const map = k.add([k.pos(0, 0)]);

    const entities = {
        player: null,
        enemies: [],
    };

    const layers = mapData.layers;
    for (const layer of layers) {
        // console.log(layer.name)
        if (layer.name === "Collisions") {
            drawCollisions(k, map, layer)
            continue;
        }

        if (layer.name === "SpawnPoints") {
            for (const object of layer.objects) {
                if (object.name === "player") {
                    entities.player = map.add(
                        generatePlayerComponents(k, k.vec2(object.x, object.y))
                    );
                    continue;
                }

                if (object.name === "Enemy") {
                    entities.enemies.push(
                        map.add(
                            generateEnemyComponents(
                                k,
                                k.vec2(object.x, object.y),
                            ),
                        ),
                    );
                    continue;
                }
            }
            continue;
        }

        drawTiles(k, map, layer, mapData.tileheight, mapData.tilewidth);
    }

    k.camScale(1.8);
    k.camPos(entities.player.worldPos());
}

export default world;

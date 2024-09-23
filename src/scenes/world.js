import { drawTiles, fetchMapData, insertBackgroundColour } from "../utils";

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
            continue;
        }

        if (layer.name === "SpawnPoints") {
            continue;
        }

        drawTiles(k, map, layer, mapData.tileheight, mapData.tilewidth)
    }
}

export default world;

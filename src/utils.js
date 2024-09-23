export function insertBackgroundColour(k, r, g, b) {
    k.add([
        k.rect(k.canvas.width, k.canvas.height),
        k.color(r, g, b),
        k.fixed(),
    ]);
}

export async function fetchMapData(mapPath) {
    return await (await fetch(mapPath)).json();
}

export function drawTiles(k, map, layer, tileheight, tilewidth) {
    let numberOfDrawnTiles = 0;
    const tilePosition = k.vec2(0, 0);

    for (const tile of layer.data) {
        if (numberOfDrawnTiles % layer.width === 0) {
            tilePosition.x = 0;
            tilePosition.y += tileheight;
        } else {
            tilePosition.x += tilewidth;
        }

        numberOfDrawnTiles++;
        if (tile === 0) continue;

        map.add([
            k.sprite("assets", { frame: tile - 1 }),
            k.pos(tilePosition),
            k.offscreen(),
        ]);
    }
}

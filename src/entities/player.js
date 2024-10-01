export function generatePlayerComponents(k, pos) {
    return [
        k.sprite("assets", {
            anim: "player-idle-down",
        }),
        k.area({ shape: new k.Rect(k.vec2(3, 4), 10, 12) }),
        k.body(),
        k.pos(pos),
        k.opacity(0.5),
        {
            speed: 100,
            attackPower: 1,
            direction: "down",
            isAttacking: false,
        },
        "player",
    ];
}

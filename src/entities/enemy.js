export function generateEnemyComponents(k, pos) {
    return [
        k.sprite("assets", {
            anim: "enemy-idle-down",
        }),
        k.area({ shape: new k.Rect(k.vec2(0, 6), 16, 10) }),
        k.body(),
        k.pos(pos),
        k.offscreen(),
        k.opacity(0.5),
        {
            speed: 30,
            attackPower: 0.5,
            direction: "down",
            isAttacking: false,
        },
        "enemy",
    ];
}

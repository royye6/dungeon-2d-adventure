import { playAnimIfNotPlaying } from "../utils";

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

export function setPlayerMovement(k, player) {
    k.onKeyDown((key) => {
        if (["left", "a"].includes(key)) {
            player.flipX = true;
            playAnimIfNotPlaying(player, "player-side");
            player.move(-player.speed, 0);
            player.direction = "left";
            return;
        }

        if (["right", "d"].includes(key)) {
            player.flipX = false;
            playAnimIfNotPlaying(player, "player-side");
            player.move(player.speed, 0);
            player.direction = "right";
            return;
        }

        if (["up", "w"].includes(key)) {
            playAnimIfNotPlaying(player, "player-up");
            player.move(0, -player.speed);
            player.direction = "up";
            return;
        }

        if (["down", "s"].includes(key)) {
            playAnimIfNotPlaying(player, "player-down");
            player.move(0, player.speed);
            player.direction = "down";
            return;
        }
    });

    onKeyDown(() => {
        player.stop();
    });
}

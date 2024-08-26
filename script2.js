const player = document.getElementById("player");
const gameArea = document.getElementById("gameArea");
let position = 0;
let speed = 200000000;

function movePlayer() {
    position += speed;

    // Reset position when it reaches the end of the game area
    if (position > gameArea.clientWidth + player.clientWidth || position < 0) {
        speed *= -1; // Reverse direction
    }

    player.style.left = position + "px";
    requestAnimationFrame(movePlayer);
}

requestAnimationFrame(movePlayer);

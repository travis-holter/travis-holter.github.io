function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctxMiddle.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
};

window.addEventListener("keydown", function (e) {
    keys[e.key] = true;
    // console.log(keys);
    if (keys["ArrowUp"] || keys["ArrowRight"] || keys["ArrowDown"] || keys["ArrowLeft"]) {
        player.moving = true;
    }
    npcs.forEach(npc => {
        if (collision(player, npc) && keys[" "]){
            npc.talked = true;
            if (stopUp) {
                npc.frameY = 0;
            };
            if (stopDown) {
                npc.frameY = 3;
            };
            if (stopRight) {
                npc.frameY = 1;
            };
            if (stopLeft) {
                npc.frameY = 2;
            };
        }
    });
});

window.addEventListener("keyup", function (e) {
    delete keys[e.key];
    player.moving = false;
})
;
var loadCount = Object.keys(assets.backgrounds).length + 
    Object.keys(assets.sprites).length + 
    Object.keys(assets.sounds).length;

function load(object, cb) {
    const loaded = {};
    Object.values(object.backgrounds).forEach( background => {
        loaded[background] = document.createElement('img');
        loaded[background].addEventListener('load', cb());
        loaded[background].src = '../images' + background + '.png';
    });
    Object.values(object.sprites).forEach( sprite => {
        loaded[sprite] = document.createElement('img');
        loaded[sprite].addEventListener('load', cb());
        loaded[sprite].src = "../images" + sprite + '.png';
    });
    Object.values(object.sounds).forEach( sound => {
        loaded[sound] = document.createElement('audio');
        loaded[sound].addEventListener('load', cb());
        loaded[sound].src = "../sounds" + sound + '.mp3';
    });
};

function onLoad(){
    if (--loadCount == 0){
        start(15);
    }
};

let fps, fpsInterval, startTime, now, then, elapsed
function start(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
};

function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctxBottom.clearRect(0, 0, bottom.width, bottom.height);
        ctxMiddle.clearRect(0, 0, middle.width, middle.height);
        ctxUpper.clearRect(0, 0, upper.width, upper.height);
        ctxFooter.clearRect(0, 0, footer.width, footer.height);
        ctxBottom.drawImage(background, 0, 0, middle.width, middle.height);
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height)
        npcs.forEach(npc => {
            drawSprite(npc.sprite, npc.width * npc.frameX, npc.height * npc.frameY, npc.width, npc.height, npc.x, npc.y, npc.width, npc.height)
        })
        npcs.forEach(npc => {
            collision(player, npc)
        })
        movePlayer();
        handlePlayerFrame();
        updateBackground();
        updateStory();
        updateFooter();
    }
};

load(assets, onLoad);
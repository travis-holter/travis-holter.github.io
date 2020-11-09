const bg = {
    map: "intro",
    top: 200,
    bottom: 350,
    left: 200,
    right: 400,
};

const background = new Image();
background.src = './images/intro.png';

function updateBackground() {
    if (player.x <= 1 && bg.map === 'cave') {
        background.src = './images/firecave2.png';
        bg.map = 'firecave2'
        bg.top = 200;
        player.y = 400;
        player.x = 790 - player.width;
        npcs = [];
        // TODO put white mage here if player has 5 dollars
        // if (checkPoint1) {
        //     npcs = [bigRock, darthVader];
        // } else {
        //     npcs = [bigRock];
        // }
    };
    if (player.x >= 799 - player.width && bg.map === 'firecave2' && checkPoint2) {
        background.src = './images/cave.png';
        bg.map = "cave";
        bg.top = 200;
        bg.bottom = 500;
        player.y = 400;
        player.x = 10;
        npcs = [darkKnight];
        darkKnight.x = 500;
        darkKnight.y = 300;
    };
     if (checkPoint0) {
        background.src = './images/background.png';
        bg.map = "background";
        bg.top = 150;
        bg.bottom = 500;
        bg.left = 0;
        bg.right = 800;
        checkPoint0 = false;
    };
    if (player.x >= 799 - player.width && bg.map === 'background') {
        background.src = './images/firecave2.png';
        bg.map = 'firecave2'
        bg.top = 300;
        player.y = 400;
        player.x = 10;
        npcs = [darkKnight];
        if (checkPoint2){
            npcs = [];
        };
    };
    if (player.x <= 1 && bg.map === 'firecave2') {
        background.src = './images/background.png';
        bg.map = 'background'
        bg.top = 150;
        player.y = 400;
        player.x = 790 - player.width;
        if(checkPoint1){
            npcs = [bigRock, darthVader];
        }else{
            npcs = [bigRock];
        }
    };
   
};
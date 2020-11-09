// checkPoint0 is pressing spacebar to get past the intro screen
let checkPoint0 = false;

// checkPoint1 is talking to the Dark Knight for the first time. It should make a second NPC appear back at the starting area. 
let checkPoint1 = false;

// checkPoint2 is talking to Darth Vader the 1st time. It should make dark knight dissapear from the fire cave and reappear in the cave
let checkPoint2 = false;

// checkPoint3 is talking to Dark Knight in the cave. It should give the player five dollars and set another NPC to appear back in the firecave
let checkPoint3 = false;

function updateStory() {
    if (checkPoint3){
        message1 = "You found my secret lair! ... How did you do that?";
        message2 = "Oh, five dollars you say? Sure, here you go.";
        face.src = "../images/drk_face.png";
    }
    else if (checkPoint2 && darkKnight.talked) {
        checkPoint3 = true;
        darkKnight.talked = false;
        menu_go.play();
    }
    else if (checkPoint2 && bg.map === "cave") {
        message1 = "There he is! Let's get that CASH!";
        message2 = "";
        face.src = '../images/blm_face.png';
    }
    else if (checkPoint2 && bg.map === "firecave2") {
        message1 = "Where did the Dark Knight go? I have to get that $5!";
        message2 = "";
        face.src = '../images/blm_face.png';
    }
    else if (checkPoint2) {
        message1 = "Don't bother me, I am meditating... on the DARK SIDE...";
        message2 = "So go away. Tell Dark Knight that he owes me $5.";
        face.src = '../images/darth_face.png';
    }
    else if (darthVader.talked){
        checkPoint2 = true;
        darthVader.talked = false;
        menu_go.play();
    }
    else if (checkPoint1 && bg.map === 'background') {
        message1 = "There is Darth Vader!";
        message2 = "I hope he has something good to say...";
        face.src = '../images/blm_face.png';
    }
    else if (checkPoint1) {
        message1 = "You should go find Darth Vader, I hear he likes to hang out by the cliffs.";
        message2 = "";
        face.src = "../images/drk_face.png";
    }
    else if (darkKnight.talked){
        checkPoint1 = true;
        darkKnight.talked = false;
        menu_go.play();
    }
    else if (bg.map === "firecave2" && !checkPoint1) {
        message1 = "Talk to people with Space Bar";
        message2 = "";
        face.src = '../images/blm_face.png';
    }
    else if (keys[" "] && bg.map === "intro") {
        checkPoint0 = true;
        menu_go.play();
    };
    npcs.forEach(npc => {
        npc.talked = false;
    })
}
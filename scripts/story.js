// checkPoint0 is pressing spacebar to get past the intro screen
let checkPoint0 = false;

// checkPoint1 is talking to the Dark Knight for the first time. It should make a second NPC appear back at the starting area. 
let checkPoint1 = false;

// checkPoint2 is talking to Darth Vader the 1st time. It should make dark knight dissapear from the fire cave and reappear in the cave
let checkPoint2 = false;

// checkPoint3 is talking to Dark Knight in the cave. It should give the player five dollars and set another NPC to appear back in the firecave
let checkPoint3 = false;

// checkPoint4 is for talking to white mage, she steals your 5 dollars
let checkPoint4 = false;

// checkPoint5 is for talking to darth vader without the 5 dollars, game over bad
let checkPoint5 = false;

//checkPoint6 is for talking to darth vader with 5 dollars, game over good
let checkPoint6 = false;

function updateStory() {
    if (checkPoint6) {
        message1 = "You have done well my apprentice.";
        message2 = "Now let us rule the galaxy together! (good ending!)";
        face.src = "../images/darth_face.png";
    }
    else if (checkPoint3 && darthVader.talked && !checkPoint4) {
        menu_go.play();
        checkPoint6 = true;
    }
    else if (checkPoint3 && !checkPoint4 && bg.map === "background") {
        message1 = "There is Darth Vader!";
        message2 = "I can give him that five dollars.";
        face.src = "../images/blm_face.png";
    }
    else if (checkPoint5) {
        message1 = "Only a fool would trust the light!";
        message2 = "Now I will laugh at you forever! HA HA HA HA HA HA! (bad ending!)";
        face.src = "../images/darth_face.png";
    }
    else if (checkPoint4 && darthVader.talked) {
        menu_go.play();
        checkPoint5 = true;
    }
    else if (checkPoint4 && bg.map === "background" || checkPoint4 && bg.map === "cave") {
        message1 = "I can't believe I got mugged!";
        message2 = "I hope Darth Vader understands...";
        face.src = "../images/blm_face.png";
    }
    else if (checkPoint4 && bg.map === "firecave2") {
        message1 = "Hey loser!";
        message2 = "Thanks for the five dollars! HA HA HA!";
        face.src = "../images/whm_face.png";
        item.src = "";
    }
    else if (checkPoint3 && whiteMage.talked) {
        checkPoint4 = true;
        if (whiteMage.talked) {
            laugh.play();};
            stopDown = false;
            stopUp = false;
            stopRight = false;
            stopLeft = false;
            whiteMage.talked = false;
        npcs = [];
    }
    else if (checkPoint3 && bg.map === "firecave2") {
        message1 = "...Oh, who is that?";
        message2 = "I wonder if they need help?";
        face.src = "../images/blm_face.png"
    }
    else if (checkPoint3 && bg.map === "cave" && !checkPoint4){
        message1 = "You found my secret lair! ... How did you do that?";
        message2 = "Oh, five dollars you say? Sure, here you go.";
        face.src = "../images/drk_face.png";
        item.src = "../images/five.png";
    }
    else if (checkPoint2 && darkKnight.talked) {
        checkPoint3 = true;
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
const bottom = document.getElementById('bottom');
const ctxBottom = bottom.getContext('2d');
bottom.width = 800;
bottom.height = 500;

const middle = document.getElementById('middle');
const ctxMiddle = middle.getContext('2d');
middle.width = 800;
middle.height = 500;

const upper = document.getElementById('upper');
const ctxUpper = upper.getContext('2d');
upper.width = 800;
upper.height = 500;

const footer = document.getElementById('footer');
const ctxFooter = footer.getContext('2d');
footer.width = 800;
footer.height = 50;

const keys = [];
var npcs = [];

var menu_go = new Audio("../sounds/menu_go.mp3");
menu_go.volume = 0.25;

var laugh = new Audio("../sounds/laugh.mp3");
laugh.volume = 0.25;

var stopUp = false;
var stopRight = false;
var stopDown = false;
var stopLeft = false;

const assets = {
    backgrounds: {
        intro: "intro",
        background: "background",
        firecave: "firecave2",
        game_over_bad: "game_over_bad",
    },
    images: {
        blm: "blackmage_m",
        blm_face: "blm_face",
        drk: "darkknight",
        drk_face: "drk_face",
        vader: "darthvader",
        vader_face: "darth_face",
        five: "five",
        whm: "whitemage_f",
        whm_face: "whm_face",
    },
    sounds: {
        menu_go: "menu_go",
        laugh: "laugh",
    },
};
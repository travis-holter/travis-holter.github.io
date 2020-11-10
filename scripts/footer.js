const face = new Image();
const item = new Image();
face.src = '';
item.src = '';
let message1 = "";
let message2 = "";

function updateFooter() {
    if (checkPoint0) {
        face.src = '../images/blm_face.png';
        message1 = "Hold 'Shift' to run!";
        message2 = "Also, go right!";
    };
    ctxFooter.font = "18px Arial";
    ctxFooter.fillText(message1, 60, 20);
    ctxFooter.fillText(message2, 60, 40);
    ctxFooter.drawImage(face, 0, 0, 50, 50);
    ctxFooter.drawImage(item, 750, 0, 50, 50);

};
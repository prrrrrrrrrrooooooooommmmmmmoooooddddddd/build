var canvas = new fabric.Canvas('myCanvas');
block_image_height = 30;
block_image_width = 30;
playerx = 10;
playery=10;
var playerobject = "";
function playerupdate() 
{
fabric.Image.fromURL("player.png", function(Img){
    playerobject = Img;
    playerobject.scaleToWidth(100);
    playerobject.scaleToHeight(100);
    playerobject.set({
        top:playery,
        left:playerx
    });
    canvas.add(playerobject);
});
}
function new_img(get_image) 
{
fabric.Image.fromURL(get_image, function(Img){
    block_image_object = Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:playery,
        left:playerx
    });
    canvas.add(block_image_object);
});
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed =='80') {
        console.log("p and shift are pressed together and the height and weight blocks");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("currentwidth").innerHTML = block_image_width;
        document.getElementById("currentheight").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keypressed =='77') {
        console.log("m and shift are pressed together and the height and weight blocks");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("currentwidth").innerHTML = block_image_width;
        document.getElementById("currentheight").innerHTML = block_image_height;
    }
    if (keypressed == '38') {
        up();
        console.log("up");
    }
    if (keypressed == '40') {
        down();
        console.log("down");
    }
    if (keypressed == '37') {
        left();
        console.log("left");
    }
    if (keypressed == '39') {
        right();
        console.log("right");
    }
    if (keypressed == '84') {
        new_img("ironman_legs.png");
        console.log("t");
    }
    if (keypressed == '68') {
        new_img("spiderman_body.png");
        console.log("d");
    }
    if (keypressed == '76') {
        new_img("ironman_face.png");
        console.log("l");
    }
    if (keypressed == '71') {
        new_img("hulk_legs.png");
        console.log("g");
    }
    if (keypressed == '87') {
        new_img("captain_america_left_hand.png");
        console.log("w");
}
    if (keypressed == '89') {
        new_img("ironman_right_hand.png");
        console.log("y");
}
    if (keypressed == '82') {
        new_img("hulk_face.png");
        console.log("r");
}
    if (keypressed == '67') {
        new_img("spiderman_face.png");
        console.log("c");
}
    if (keypressed == '85') {
        new_img("thor_right_hand.png");
        console.log("u");
}
}

 function up() {
     if (playery >=0) {
        playery = playery - block_image_height;
        console.log("block img height = " + block_image_height);
        console.log("when up is pressed x =" + playerx + " y = " + playery);
        canvas.remove(playerobject);
        playerupdate;
     }
 }
 function down() {
    if (playery <=500) {
       playery = playery + block_image_height;
       console.log("block img height = " + block_image_height);
       console.log("when down is pressed x =" + playerx + " y = " + playery);
       canvas.remove(playerobject);
       playerupdate;
    }
}
function left() {
    if (playerx >=0) {
       playerx = playerx - block_image_width;
       console.log("block img height = " + block_image_width);
       console.log("when left is pressed y =" + playery + " x = " + playerx);
       canvas.remove(playerobject);
       playerupdate;
    }
}
function right() {
    if (playerx <=800) {
       playerx = playerx + block_image_width;
       console.log("block img width = " + block_image_width);
       console.log("when up is pressed y =" + playery + " x = " + playerx);
       canvas.remove(playerobject);
       playerupdate;
    }
}
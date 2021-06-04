var canvas=new fabric.Canvas("myCanvas");
var px= 10;
var py= 10;
var bw= 30;
var bh= 30;
var playobj="";
var blockobj="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){

        playobj= Img;
        playobj.scaleToWidth(150);
        playobj.scaleToHeight(150);
        playobj.set({

            top:py,left:px
        });
        canvas.add(playobj);
    });
}

function block_update(get_blk){
    fabric.Image.fromURL(get_blk, function(Img){

        blockobj= Img;
        blockobj.scaleToWidth(bw);
        blockobj.scaleToHeight(bh);
        blockobj.set({

            top:py,left:px
        });
        canvas.add(blockobj);
    });
}


window.addEventListener("keydown", myKey);

function myKey(e){
    keyp=e.keyCode;
    console.log(keyp);

    if(e.shiftKey == true && keyp == '80'){
        console.log("shift+p");
        bw= bw + 10;
        bh= bh + 10;
        document.getElementById("width").innerHTML=bw;
        document.getElementById("height").innerHTML=bh;
    }

    if(e.shiftKey == true && keyp == '77'){
        console.log("shift+m");
        bw= bw - 10;
        bh= bh - 10;
        document.getElementById("width").innerHTML=bw;
        document.getElementById("height").innerHTML=bh;
    }

    if(keyp == '37'){
        left();
        console.log("left");
    }
    if(keyp == '38'){
        up();
        console.log("up");
    }
    if(keyp == '39'){
        right();
        console.log("right");
    }
    if(keyp == '40'){
       down();
        console.log("down");
    }

    if(keyp == '87'){
        block_update('wall.jpg');
        console.log("W");
    }

    if(keyp == '71'){
        block_update('ground.png');
        console.log("G");
    }

    if(keyp == '76'){
        block_update('light_green.png');
        console.log("L");
    }

    if(keyp == '84'){
        block_update('trunk.jpg');
        console.log("T");
    }

    if(keyp == '82'){
        block_update('roof.jpg');
        console.log("R");
    }

    if(keyp == '89'){
        block_update('yellow_wall.png');
        console.log("Y");
    }

    if(keyp == '68'){
        block_update('dark_green.png');
        console.log("D");
    }

    if(keyp == '85'){
        block_update('unique.png');
        console.log("U");
    }

    if(keyp == '67'){
        block_update('cloud.jpg');
        console.log("C");
    }
}
function up(){
    if(py > 0){
    py=py - bh;
    console.log("block height =" + bh);
    console.log("player x =" + px + ",playery = " + py);
    canvas.remove(playerobj);
    player_update();
    }
}


function down(){
    if (py <= 450){
        py=py+bh;
        console.log("block height =" + bh);
        console.log("player x =" + px + ",player y =" + py );
        canvas.remove(playerobj);
        player_update();
    }
}


function left(){
    if (px > 0){
        px=px-bw;
        console.log("block width =" + bw);
        console.log("player x =" + px + ",player y =" + py );
        canvas.remove(playerobj);
        player_update();
    }
}

function right(){
    if (px <= 850){
        px=px+bw;
        console.log("block width =" + bw);
        console.log("player x =" + px + ",player y =" + py );
        canvas.remove(playerobj);
        player_update();
    }
}
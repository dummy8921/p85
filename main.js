canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");



roverwidth=100;
roverheight=91;
roverX=10;
roverY=10;
backgroundimage="1 c.png";
roverimage="images.png";
function add()
{
    bactag=new Image();
    bactag.onload=uploadbackground;
    bactag.src=backgroundimage;
rovertag=new Image();
rovertag.onload=uploadrover;
rovertag.src=roverimage;
}
function uploadbackground()
{ctx.drawImage(bactag,0,0,canvas.width,canvas.height);
}
function uploadrover()
{
ctx.drawImage(rovertag,roverX,roverY,roverwidth,roverheight);

}
window.addEventListener("keydown", fuctrer);
function fuctrer(e)
{
keypreser=e.keyCode;
if(keypreser=='37')
{
left();
}
if(keypreser=='38')
{
up();
}
if(keypreser=='39')
{
right();
}
if(keypreser=='40')
{
down();
}
}
function up()
{
if(roverY>=0)
{
roverY=roverY-20;
uploadbackground();
uploadrover();

}
}
function down()
{
if(roverY<=500)
{
roverY=roverY+20;
uploadbackground();
uploadrover();

}
}

function left()
{
if(roverX>=0)
{
roverX=roverX-20;
uploadbackground();
uploadrover();
}
}
function right()
{
if(roverX<=700)
{
roverX=roverX+20;
uploadbackground();
uploadrover();

}
}
















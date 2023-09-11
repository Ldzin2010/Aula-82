canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mouseEvent = "empty"
var lastPositionX, lastPositionY;
color = "black";
widthLine = 1;
canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
mouseEvent = "mouseDown";

}
canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {
    color = document.getElementById("color").value
    widthLine = document.getElementById("line").value
mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e) {
mouseEvent = "mouseLeave";

}
canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove    (e) {
//mouseEvent = "mouseMove";
PositionMouseX = e.clientX - canvas.offsetLeft;
PositionMouseY = e.clientY - canvas.offsetTop;
if(mouseEvent=="mouseDown")
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthLine;
console.log("x = "+lastPositionX+"y = "+lastPositionY);
ctx.moveTo(lastPositionX, lastPositionY);

console.log("x = "+PositionMouseX+"y = "+PositionMouseY);
ctx.lineTo(PositionMouseX, PositionMouseY);
ctx.stroke();
}
lastPositionX = PositionMouseX;
lastPositionY = PositionMouseY;
}
function limpar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
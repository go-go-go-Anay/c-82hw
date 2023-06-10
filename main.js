var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mouseEvent="";
var color="";
var width_of_line="";
var radius = "";
var last_position_of_x,last_position_of_y;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
     color =document.getElementById("color").value;
     width_of_line=document.getElementById("width_of_line").value;
     radius = document.getElementById("radius").value;
     console.log(color);
     console.log(width_of_line);
     console.log(radius);
     mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        console.log("x position is"+last_position_of_x+"y position is"+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.linewidth=width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
        console.log("current position of mouse at x"+ current_position_of_mouse_x+"current position of mouse at y "+ current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}
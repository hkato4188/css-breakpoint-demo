//responsive and runs every resize and reload
window.onresize = screen;
window.onload = screen;

//displays the width of the window
function screen (){
    myWidth = window.innerWidth;

    document.getElementById('size').innerHTML = "Screen Width: " + myWidth + "px";
}
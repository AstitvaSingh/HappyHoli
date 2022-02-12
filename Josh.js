var dragValue;

function move(id) {
    var drager = document.getElementById("suprise");
    drager.style.position = "absolute";
    drager.onmousemove = function() {
        dragValue = drager;
    }
}
document.onmousemove = function(dragerMouseMove) {
    var x = dragerMouseMove.pageX;
    var y = dragerMouseMove.pageY;


    dragValue.style.left = x + "px";
    dragValue.style.top = y + "px";
}


function refresh() {
    location.replace('/holi.html')
}
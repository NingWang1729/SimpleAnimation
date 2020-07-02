//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
     var x_pos = 0; 
     var y_pos = 0;
    //our box element
    var box = document.getElementById('box');
    var t = setInterval(moveRight, 10);
  
    function moveRight() {
        if(x_pos >= 150) {
            clearInterval(t);
            t = setInterval(moveDown, 10);
        }
        else {
            x_pos += 1;
            box.style.left = x_pos+'px';
        }
    }
    function moveLeft() {
        if(x_pos <= 0) {
            clearInterval(t);
            t = setInterval(moveUp, 10);
        }
        else {
            x_pos -= 1;
            box.style.left = x_pos+'px';
        }
    }
    function moveUp() {
        if(y_pos <= 0) {
            clearInterval(t);
            t = setInterval(moveRight, 10);
        }
        else {
            y_pos -= 1;
            box.style.top = y_pos+'px';
        }
    }
    function moveDown() {
        if(y_pos >= 150) {
            clearInterval(t);
            t = setInterval(moveLeft, 10);
        }
        else {
            y_pos += 1;
            box.style.top = y_pos+'px';
        }
    }
};

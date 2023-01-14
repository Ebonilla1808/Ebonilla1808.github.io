var element = document.getElementById("stela");
element.addEventListener("click", move);

var pos = screen.width;
var top = 50;
var cola = 1;
var id;

function move() {
  id = setInterval(frame, 5);
}

function frame() {
  if (pos == -screen.width) {
    clearInterval(id);
    cola=1;
    pos=screen.width;
    move();
  } else {
    if(pos > screen.width/2){
        element.style.top = top +'%';
        top--;
    }
    pos--; 
    cola+=1;
    element.style.left = pos + 'px'; 
    element.style.width = cola + 'px'; 
  }
}
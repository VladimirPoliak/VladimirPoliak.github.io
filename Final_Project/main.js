//https://stackoverflow.com/questions/24639103/changing-vertical-scroll-to-horizontal


/* This function uses the preventDefault method to stop the website from scrolling normally.
The window.scroll method translates the vertical movement of the mouse wheel to horizontal page movement. */
function verticalToHorizontal(event) {
    event.preventDefault();
    window.scroll(event.currentTarget.scrollLeft += 3*event.deltaY, 0);
  }

//This scrollingElement eventlistner detects movement in the mousewheel and executes the verticalToHorizontal function.
document.scrollingElement.addEventListener('wheel', verticalToHorizontal, {passive: false});

/* This function styles the HTML element with the specified ID with 
an increased size for when the picture is hovered. */
function enlarge(id) {
  var pictureChange = document.getElementById(id);
  pictureChange.style.width = "60%";
  pictureChange.style.height = "60%";
  pictureChange.style.position = "absolute";
}

/* This function styles the HTML element with the specified ID with 
an removed size modification for when the picture is unhovered. */
function shrink(id) {
  var pictureChange = document.getElementById(id);
  pictureChange.style.width = null;
  pictureChange.style.height = null;
  pictureChange.style.position = null;
}


/* When clicking anywhere on the website besides the menu button, the event is detected as not pressing the menu button, so the
content is grabbed in a variable and then it toggles the "show" condition from all of the variables in the menu making them disappear.
Followed ITM780 Lab 5 Instructions to achive.
window.onclick = function(event) {
  if (!event.target.matches('clickable')) {
    var picture = document.getElementById("clickable");
    picture.style.width = null;
    picture.style.height = null;
    } 
  }*/
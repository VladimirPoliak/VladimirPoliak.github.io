/* This function uses the preventDefault method to stop the website from scrolling normally.
The window.scroll method translates the vertical movement of the mouse wheel to horizontal page movement. 
The tutorial followed to create this function is https://stackoverflow.com/questions/24639103/changing-vertical-scroll-to-horizontal*/
function verticalToHorizontal(event) {
    event.preventDefault();
    window.scroll(event.currentTarget.scrollLeft += 3*event.deltaY, 0);
  }

//This scrollingElement eventlistner detects movement in the mousewheel and executes the verticalToHorizontal function.
document.scrollingElement.addEventListener('wheel', verticalToHorizontal, {passive: false});

/* This confirmation function prompts the user to confirm they want to leave the website, so they can choose not to if they clicked by mistakevent.
The tutorial followed to create this function is https://developer.mozilla.org/en-US/docs/Web/API/Window/open*/
function confirmation(link) {
  var confirmation = confirm("This Link Goes to An External Website\nPress 'Ok' If You want to Go.");
  if (confirmation == true) {
    window.open(link, "_blank");
  }
}

/* This function takes the user back to the home function whenever the browser page is reloded for easier navigaiton.
The tutorial followed to create this function is https://stackoverflow.com/questions/5007530/how-do-i-scroll-to-an-element-using-javascript*/
window.onbeforeunload = function(event) {
  document.getElementById("Home").scrollIntoView();
}

//This eventlistner detects movement in the mousewheel and executes the zoomStop function.
document.addEventListener("wheel", zoomStop, {passive: false});


/* This function uses the preventDefault method to stop the website from zooming in when the mouse wheel is scrolled.
The tutorial followed to create this function is https://codepen.io/Abdelrahman286/pen/XWXqwXL*/
function zoomStop(event) {
  event.preventDefault();
}

//This eventlistner detects movement in the keyboard and executes the zoomStopKey function.
document.addEventListener("keydown", zoomStopKey, {passive: false});

/* This function uses the preventDefault method to stop the website from zooming in when it detect the control 
key is pushed and any of the buttons used to zoom the website in such as "+" or "-" are pressed. 
The tutorial followed to create this function is https://codepen.io/Abdelrahman286/pen/XWXqwXL*/
function zoomStopKey(event) {
  if (event.ctrlKey && (event.keyCode == "61" || event.keyCode == "107" || event.keyCode == "173" || event.keyCode == "109" || event.keyCode == "187" || event.keyCode == "189")) {
    event.preventDefault();
  }
}
/* This function uses the preventDefault method to stop the website from scrolling normally.
The window.scroll method translates the vertical movement of the mouse wheel to horizontal page movement. 
The tutorial followed to create this function is https://stackoverflow.com/questions/24639103/changing-vertical-scroll-to-horizontal*/
function verticalToHorizontal(event) {
    event.preventDefault();
    window.scroll(event.currentTarget.scrollLeft += 3*event.deltaY, 0);
  }

//This scrollingElement eventlistner detects movement in the mousewheel and executes the verticalToHorizontal function.
document.scrollingElement.addEventListener('wheel', verticalToHorizontal, {passive: false});

/* This confirmation function prompts the user to confirm they want to leave the website, so they can choose not to if they clicked by mistake.
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

/*
function sitePosition(id) {
  var viewItem = document.getElementById(id)
  var viewElement = viewItem.getBoundingClientRect();
  alert(viewElement)
}
*/
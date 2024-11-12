//https://stackoverflow.com/questions/24639103/changing-vertical-scroll-to-horizontal


/* This function uses the preventDefault method to stop the website from scrolling normally.
The window.scroll method translates the vertical movement of the mouse wheel to horizontal page movement. */
function verticalToHorizontal(event) {
    event.preventDefault();
    window.scroll(event.currentTarget.scrollLeft += 3*event.deltaY, 0);
  }

//This scrollingElement eventlistner detects movement in the mousewheel and executes the verticalToHorizontal function.
document.scrollingElement.addEventListener('wheel', verticalToHorizontal, {passive: false});

// This confirmation function prompts the user to confirm they want to leave the website, so they can choose not to if they clicked by mistake.
function confirmation(link) {
  var confirmation = confirm("This Link Goes to An External Website\nPress 'Ok' If You want to Go.");
  if (confirmation == true) {
    window.open(link, "_blank") //https://developer.mozilla.org/en-US/docs/Web/API/Window/open
  }
}

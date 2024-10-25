//https://stackoverflow.com/questions/24639103/changing-vertical-scroll-to-horizontal


/* This function uses the preventDefault method to stop the website from scrolling normally.
The window.scroll method translates the vertical movement of the mouse wheel to horizontal page movement. */
function verticalToHorizontal(event) {
    event.preventDefault();
    window.scroll(event.currentTarget.scrollLeft += event.deltaY, 0);
  }

//This scrollingElement eventlistner detects movement in the mousewheel and executes the verticalToHorizontal function.
document.scrollingElement.addEventListener('wheel', verticalToHorizontal, {passive: false});


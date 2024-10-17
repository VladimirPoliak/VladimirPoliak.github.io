//https://stackoverflow.com/questions/24639103/changing-vertical-scroll-to-horizontal

function verticalToHorizontal(event) {
    event.preventDefault();
    window.scroll(event.currentTarget.scrollLeft += event.deltaY, 0);
  }
  
document.scrollingElement.addEventListener('wheel', verticalToHorizontal, {passive: false});


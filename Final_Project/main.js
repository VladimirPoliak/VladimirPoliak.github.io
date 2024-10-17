function transformScroll(event) {
    event.preventDefault();
    window.scroll(event.currentTarget.scrollLeft += event.deltaY, 0);
  }
  
  var element = document.scrollingElement;
  element.scrollTop= 5;
  element.addEventListener('wheel', transformScroll, {passive: false});


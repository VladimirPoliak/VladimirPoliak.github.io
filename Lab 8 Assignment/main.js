/* When clickinkg on the "Text Enlarge Button" all of the styling for the text size is set for all of the text elements in the document,
 the different accessibility buttons and the links. All the text and links are increased to the same size*/
function enlarge() {
    var enlargableText = document.querySelectorAll("h1, h2, h3, h4, h5, h6, li, p, figcaption"); // This for loop is necessary to enlarge all the text elements.
    for(var i = 0; i < enlargableText.length; i++){
        enlargableText[i].style.fontSize = "200%";
    }
    enlargableText = document.getElementsByClassName("menuButton") // This button needs to be enlarged seperately because it has a different class name.
    enlargableText[0].style.fontSize = "200%";
    enlargableText = document.getElementsByClassName("helpItem"); // This for loop is necessary to enlarge all the buttons.
    for(var i = 0; i < enlargableText.length; i++){    
        enlargableText[i].style.fontSize = "200%";
    }
    enlargableText = document.getElementsByTagName("a"); // This for loop is necessary to ensure all the links match the size of the text.
    for(var i = 0; i < enlargableText.length; i++){
        enlargableText[i].style.fontSize = "100%";
    }
}

/* When clickinkg on the "Normal Text Button" all of the styling for the text size is removed for all of the text elements in the document,
 the different accessibility buttons and the links. All the text and links are decreased to the original size.*/
function ensmall() {
    var enshrinkableText = document.getElementsByClassName("menuButton") // This button needs to be shrunk seperately because it has a different class name.
    enshrinkableText[0].style.fontSize = null;
    enshrinkableText = document.querySelectorAll("h1, h2, h3, h4, h5, h6, li, p, a, figcaption"); // This for loop is necessary to shrink all the text elements.
    for(var i = 0; i < enshrinkableText.length; i++){ 
        enshrinkableText[i].style.fontSize = null;
    }
    enshrinkableText = document.getElementsByClassName("helpItem"); // This for loop is necessary to shrink all the buttons.
    for(var i = 0; i < enshrinkableText.length; i++){
        enshrinkableText[i].style.fontSize = null;
    }
}

/* When clickinkg on the "Contrast Button" all of the styling for the contrast is set for the body of the document,
 the different accessibility buttons and the links. The specific contrast styles were chosen from the Lab 8 Accessability slideshow.*/
function maxContrast() {
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "red";
    var maxContrast = document.getElementsByClassName("menuButton") // This button needs to be assigned a style seperately because it has a different class name.
    maxContrast[0].style.backgroundColor = "orange";
    maxContrast[0].style.color = "purple";
    maxContrast = document.getElementsByClassName("helpItem"); // This for loop is necessary to assign the style of all the buttons.
    for(var i = 0; i < maxContrast.length; i++){
        maxContrast[i].style.backgroundColor = "orange";
        maxContrast[i].style.color = "purple";
    }
    maxContrast = document.getElementsByTagName("a"); // This for loop is necessary to assign the style of all the links.
    for(var i = 0; i < maxContrast.length; i++){
        maxContrast[i].style.color = "orange";
    }
}

/* When clickinkg on the "Normal Contrast Button" all of the styling for the contrast is removed from the body of the document,
 the different accessibility buttons and the links. All the text and links are reverted to the original style.*/
function normalContrast() {
    document.body.style.backgroundColor = null;
    document.body.style.color = null;
    var normalContrast = document.getElementsByClassName("menuButton") // This button needs its style reset seperately because it has a different class name.
    normalContrast[0].style.backgroundColor = null;
    normalContrast[0].style.color = null;
    normalContrast = document.getElementsByClassName("helpItem"); // This for loop is necessary to reset the style of all the buttons.
    for(var i = 0; i < normalContrast.length; i++){
        normalContrast[i].style.backgroundColor = null;
        normalContrast[i].style.color = null;
    }
    normalContrast = document.getElementsByTagName("a"); // This for loop is necessary to reset the style of all the links.
    for(var i = 0; i < normalContrast.length; i++){
        normalContrast[i].style.color = null;
    }
}

// This function toggles the menu to show its content when the button is pushed.
function dropDownFunciton() {
    document.getElementById("menu").classList.toggle("show");
}

/* When clicking anywhere on the website besides the menu button, the event is detected as not pressing the menu button, so the
content is grabbed in a variable, and then it toggles the "show" condition from all of the variables in the menu, making them disappear.
Followed ITM780 Lab 5 Instructions to achieve.*/
window.onclick = function(event) {
    if (!event.target.matches('.menuButton')) {
        var menuContent = document.getElementsByClassName("content");
        for (var i = 0; i <= menuContent.length; i++) {
            var openMenu=menuContent[i];
            if (openMenu.classList.contains('show')) {
                openMenu.classList.toggle('show');
            }
        } 
    }
}

// This function shows the contents of the element with the ID that is passed to the function by assigning it a display block style.
function altDisplay (id) {
    alttext = document.getElementById(id);
    alttext.style.display = "block";
}

// This function hides the contents of the element with the ID that is passed to the function by assigning it a null display style, reverting it to its default style.
function altHide (id) {
    alttext = document.getElementById(id);
    alttext.style.display = null;
}
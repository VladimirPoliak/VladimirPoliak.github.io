function enlarge() {
    var enlargableText = document.querySelectorAll("h1, h2, h3, h4, h5, h6, li, p, a");
    for(var i = 0; i < enlargableText.length; i++){
        enlargableText[i].style.fontSize = "200%";
    }
    var enlargableText = document.getElementsByClassName("helpItem");
    for(var i = 0; i < enlargableText.length; i++){    
        enlargableText[i].style.fontSize = "200%";
    }
}

function ensmall() {
    var enshrinkableText = document.querySelectorAll("h1, h2, h3, h4, h5, h6, li, p, a");
    for(var i = 0; i < enshrinkableText.length; i++){
        enshrinkableText[i].style.fontSize = null;
    }
    var enshrinkableText = document.getElementsByClassName("helpItem");
    for(var i = 0; i < enshrinkableText.length; i++){
        enshrinkableText[i].style.fontSize = null;
    }
}

function maxContrast() {
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "red";
    document.querySelector("a").style.color = "orange";
    var maxContrast = document.getElementsByClassName("menuButton");
    maxContrast[0].style.backgroundColor = "orange";
    maxContrast[0].style.color = "purple";
    maxContrast = document.getElementsByClassName("helpItem");
    for(var i = 0; i < maxContrast.length; i++){
        maxContrast[i].style.backgroundColor = "orange";
        maxContrast[i].style.color = "purple";
    }
}

function normalContrast() {
    document.body.style.backgroundColor = null;
    document.body.style.color = null;
    document.querySelector("a").style.color = null;
    var normalContrast= document.getElementsByClassName("menuButton");
    normalContrast[0].style.backgroundColor = null;
    normalContrast[0].style.color = null;
    normalContrast = document.getElementsByClassName("helpItem");
    for(var i = 0; i < normalContrast.length; i++){
        normalContrast[i].style.backgroundColor = null;
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
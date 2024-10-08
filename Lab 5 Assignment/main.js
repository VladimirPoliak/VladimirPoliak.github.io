/* This function prompts the user for their name and records it in the "name" variable 
before running the textChange function and passing the name variable and then running the elementChange function. */
function nameButton() {
    var name = prompt("Hello, please enter your name:");
    textChange(name);
    elementChange();
    return name
}

/* This function takes the name variable as a paramater, gets the name element before 
getting the element with the "nameChange" tag from the HTML document and changing the text and adding the name. */
function textChange(name) {
    document.getElementById("nameChange").innerHTML = "Hello there  " + name;
}

/* This function styles the HTML element with the "nameChange" tag with 
multiple styles after assignment the element form the HTML document to a variable. */
function elementChange() {
    var firstElement = document.getElementById("nameChange");
    firstElement.style.color = "red";
    firstElement.style.fontFamily = "Times New Roman";
    firstElement.style.fontSize = "20px";
}

/* This function styles the HTML element with the "selfPicture" tag with 
an increased size for when the picture is clicked. */
function enlarge() {
    var pictureChange = document.getElementById("selfPicture");
    pictureChange.style.width = "10%";
    pictureChange.style.height = "10%";
}
 // This function toggles the menu to show its content when the button is pushed.
function dropDownFunciton() {
    document.getElementById("menu").classList.toggle("show");
}

/* When clicking anywhere on the website besides the menu button, the event is detected as not pressing the menu button, so the
content is grabbed in a variable and then it remvoes the "show" condition from all of the variables in the menu making them disappear.
Followed ITM780 Lab 5 Instructions to achive.*/
window.onclick = function(event) {
    if (!event.target.matches('.menuButton')) {
        var menuContent = document.getElementsByClassName("content");
        for (var i = 0; i <= menuContent.length; i++) {
            var openMenu=menuContent[i];
            if (openMenu.classList.contains('show')) {
                openMenu.classList.remove('show');
            }
        } 
    }
}

/* This function takes the ident variable and assigns multiple styles when the mouse is hovered over it, 
the id of each menu item is passed to the ident variable. */
function mouseOver(ident) {
    var mousedElement = document.getElementById(ident);
    mousedElement.style.color = "blue";
    mousedElement.style.backgroundColor = "green";
    mousedElement.style.fontFamily = "Times New Roman";
    mousedElement.style.fontSize = "30px";
}

/* This function takes the ident variable and defaults multiple styles when the mouse is no longer hovered over it, 
the id of each menu item is passed to the ident variable. */
function mouseOut(ident) {
    var unMousedElement = document.getElementById(ident);
    unMousedElement.style.color = null;
    unMousedElement.style.backgroundColor = null;
    unMousedElement.style.fontSize = null;
}
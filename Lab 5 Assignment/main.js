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
 // This function toggles the menu to show its buttons.
function dropDownFunciton() {
    document.getElementById("menu").classList.toggle("show");
}

/* This function takes the ident variable and assigns multiple styles when the mouse is hovered over it, 
the id of each menu item is passed to the ident variable. */
function mouseOver(id) {
    var mousedElement = document.getElementById(id);
    mousedElement.style.color = "blue";
    mousedElement.style.backgroundColor = "green";
    mousedElement.style.fontSize = "25px";
}

/* This function takes the ident variable and defaults multiple styles when the mouse is no longer hovered over it, 
the id of each menu item is passed to the ident variable. */
function mouseOut(id) {
    var unMousedElement = document.getElementById(id);
    unMousedElement.style.color = null;
    unMousedElement.style.backgroundColor = null;
    unMousedElement.style.fontSize = null;
}

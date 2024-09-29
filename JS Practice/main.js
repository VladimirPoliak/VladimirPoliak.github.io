/*
alert("Test"); // This is a comment.


function helloMessage(){
    var name = "Vladimir";
    var message = "Hello, ";

    alert(message + name);
}



function helloLoop(word, iteration) {
    for (var i = 0; i < iteration; i++); {
        alert("Hello", word, "!");
    }
}

helloMessage();
helloLoop("Test", 10);


window.onload = function() {
    var maindiv = document.getElementById("unique");
    maindiv.style.backgroundColor = "green";
}
*/

window.onload = function() { // runs this function when the website is loaded
    var name  = prompt("Hello, please enter your name:"); // this prompts the user for their name and assigns it to the name variable
    alert("Hello there, " + name); // this returns a box with the users name
    elementChange(); // this runs the elementChange function
    textChange(name); // this runs the textChange function and passes it the name variable
}

function elementChange() { // this initializes the fucntion called elemenetChange
    var firstElement = document.getElementById("nameChange"); // retreives the element with the nameChange Id and assigns it to the firstElement variable
    firstElement.style.color = "red"; // changes the firstElement text color to red
    firstElement.style.fontFamily = "Times New Roman"; // changes the firstElement text font to times new roman
    firstElement.style.fontSize = "20px"; // changes the firstElement size to 20px
    var secondElement = document.getElementById("unique"); //retreives the element with the unique Id and assigns it to the secondElement variable
    secondElement.style.color = "blue"; // changes the secondElement text color to blue
    secondElement.style.backgroundColor = "green"; // changes the secondElement background color to green
    secondElement.style.fontSize = "50px"; // changes the secondElement text szie to 50px
}

function textChange(name) { // this initializes the fucntion called textChange with the parameter name
    var nameElement = document.getElementById("nameChange"); // this assigns the element with the nameChange Id to the nameElement variable
    nameElement.innerHTML = "Hello there  " + name; // this changes the text in the nameElement elementS
}


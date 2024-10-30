//This function sends the user back to the homepage.
function formCancel(){
    window.location.href = "index.html";
}

//This function stores all the user entered form values in local storage in the browser.
function formSubmission(){
    /* The below 3 items take the values from the elemets with fName, lName and email id's and puts them in local storage.
    https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/*/
    localStorage.setItem("firstName", document.getElementById("fName").value);
    localStorage.setItem("lastName", document.getElementById("lName").value);
    localStorage.setItem("email", document.getElementById("email").value);
    /* The below 3 items take the results from the elements with choice, province and opinions names 
    and transform them into lists before using the index to retrieve the value and put them in local storage.
    This is because otherwise, the form elements return an Object List with a null value.*/
    var choiceList=document.getElementsByName("choice"); //Assigns the output of the choice name to choiceList variable.
    for (i = 0; i < choiceList.length; i++) { //Goes through every element in the choiceLis.
        if (choiceList[i].checked) { //Checks if the element has been checked.
                localStorage.setItem("choice", choiceList[i].value); //Stores the checked value in local storage.
        }
    }
    var provinceList=document.getElementsByName("province"); //Assigns the output of the province name to provinceList variable.
    for (i = 0; i < provinceList.length; i++) { //Goes through every element in the provinceList.
        localStorage.setItem("province", provinceList[i].value); //Stores the value in local storage.
    }
    var opinionList=document.getElementsByName("opinions"); //Assigns the output of the opinions name to opinionsList variable.
    var opinions = []; //Creates an empty opinions array since the user might select multiple options.
    for (i = 0; i < opinionList.length; i++) { //Goes through every element in the opinionsList.
        if (opinionList[i].checked) { //Checks if the element has been checked.
                opinions.push(opinionList[i].value); //Appends the checked elements to the opinions list so all options are captured.
        }
    }
    localStorage.setItem("opinions", opinions); //Stores the opinions list in local storage.
    /* The below 2 items take the values from the elements with color and feedback id's and puts them in local storage.*/
    localStorage.setItem("color", document.getElementById("color").value);
    localStorage.setItem("feedback", document.getElementById("feedback").value);
}

//This function shows all user-entered values in the console and in the alert box for easier debugging.
function showResults() {
    //The below shows all the user entered values in the console.
    console.log(localStorage.getItem("firstName"));
    console.log(localStorage.getItem("lastName"));
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("choice"));
    console.log(localStorage.getItem("province"));
    console.log(localStorage.getItem("opinions"));
    console.log(localStorage.getItem("color"));
    console.log(localStorage.getItem("feedback"));
    /* This code can be enabled to show an alert box with all the user-entered values instead of using the console.
    alert("First Name:"+(localStorage.getItem("firstName")) + "\n" + "Last Name:" + localStorage.getItem("lastName") + "\n" +
    "Email:" + localStorage.getItem("email") + "\n" + "User Job:" + localStorage.getItem("choice") + "\n" + "Residence:" +
    localStorage.getItem("province") + "\n" + "User Opinions:" + localStorage.getItem("opinions") + "\n" + "Favorite Color:" +
    localStorage.getItem("color") + "\n" + "User Feedback" + localStorage.getItem("feedback"));
    */
}

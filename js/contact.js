//Contact Validation
function validateContactForm(){
    let statusElement = document.querySelector(".status");
    var name =  document.getElementById("name").value;
    if (name == "") {
        statusElement.innerHTML = "Name cannot be empty";
        return false;
    }

    //User Regex to validate email address https://regexr.com/3e48o
    var email =  document.getElementById("email").value;
    if (email == "" || !validateEmail(email)){
        statusElement.innerHTML = "Invalid email";
        return false;
    }
    var description =  document.getElementById("description").value;
    if (description == "") {
        statusElement.innerHTML = "Invalid description";
        return false;
    }
    statusElement.innerHTML = "";
    return true;
}

//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
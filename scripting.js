function matchpass(){
    var firstPassword = document.registrationfullform.password.value;
    var secondPassword = document.registrationfullform.confirmpassword.value;

    if(firstPassword==secondPassword) {
        return true
    }else {
        alert("Password must be the same")
        return false
    }
}

function passwordToggle() {
    var view = document.getElementById("password");
    if (view.type === "password") {
        view.type = "text";
    } else {
        view.type = "password";
    }
}

function confirmpasswordToggle() {
    var view = document.getElementById("confirmpassword");
    if (view.type === "password") {
        view.type = "text";
    } else {
        view.type = "password";
    }
}


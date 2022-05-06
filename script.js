function validateForm() {
    let pw1 = document.getElementById("password").value
    let pw2 = document.getElementById("rePassword").value
    let msg = document.getElementById("messege1")
    if(pw1 != pw2) {
        msg.innerHTML = "Passwords do not match baby";
        return false;  
    } else {
       // alert("Your passwords match or something");
        document.write("You successfully signed up");
    }  
}

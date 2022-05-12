
function validateForm2() {
    let pw1 = document.getElementById("password").value;
    let pw2 = document.getElementById("rePassword").value;
    let msg = document.getElementById("message1");
    if(pw1 != pw2) {
        msg.style.display= "block";
        return false;  
    } else {
        msg.style.display= "none";
        return true;
    }
    
}
document.getElementById("rePassword").oninput = validateForm2;

// if (document.querySelector('email:invalid')) {
//     document.getElementById('error').style.display = "block";
// } else {
//     document.getElementById('error').style.display = "none";
// }

function disableField() {
    const invalidForm = document.querySelector('form:invalid');
    const submitBtn = document.getElementById('submit');
    if(invalidForm) {
        submitBtn.setAttribute('disabled' , true);
    } else {
        submitBtn.disabled = false;
    }
}
disableField()
const inputs = document.getElementsByTagName("input");
for (let input of inputs) {
    input.addEventListener('change', disableField);
}


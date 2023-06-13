function showalert() {
    alert("!hola, esta es una alerta desde JavaScript!.");
}


document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

                      
const form = document.getElementById("myform");
form.addEventListener("submit",function(event) {
    event.preventDefault();
    validateform();
})
function validateEmail(email) {
    const regex=  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
function validateform() {
    const emailinput= document.getElementById("email");
    const email= emailinput.value;
    if (!validateEmail(email)) {
        alert("por favor ingrese un correo electronico valido");
    } else {
        alert("correo electronico enviado correctamente.");
    }
}

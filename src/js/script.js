const eye = document.querySelector('.fa-regular.fa-eye-slash');
const inputPassword = document.querySelector('#password')

eye.addEventListener('click', e => {
    if(inputPassword.type === "password") {
        inputPassword.type = "text"
        eye.classList.remove("fa-eye-slash") 
        eye.classList.add("fa-eye") 
    } else {
        inputPassword.type = "password"
        eye.classList.add("fa-eye-slash") 
        eye.classList.remove("fa-eye")
    }
})

{/* "fa-regular fa-eye" */}
let password = document.getElementById("password");
let show = document.getElementById("show");
let eye =  document.querySelector("<i class='fa-solid fa-eye'></i>");   
let eyeSlash =  document.querySelector("<i class='fa-solid fa-eye-slash'></i>");    

show.onclick = function() {
    if(password.type == "password") {
        password.type = "text";
        show.classList.add("fa-solid fa-eye")
    } else if(password.type == "text") {
        password.type = "password"
        show.classList.add("fa-solid fa-eye-slash")
    }
}



document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    loguear(); 
});

function loguear() {
    const user = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (user == "admin" && password == "1234") {
        window.location.href = "crud.html"
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

const logoutButton = document.getElementById("logout-button");

    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            window.location.href = "inicio.html"; 
        })
    }
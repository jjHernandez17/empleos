
const btnLogIn = document.getElementById("btnLogIn");



function logInFunction(e) {
   

    const inIdentifier = document.getElementById("email").value.trim();
    const inpassword = document.getElementById("password").value.trim();


    if (!inIdentifier || !inpassword) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    
    fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(users => {
            const user = users.find(u =>
                u.correo === inIdentifier &&
                u.password === inpassword
            )

            if (user) {
                document.getElementById("email").classList.add("is-valid");
                document.getElementById("password").classList.add("is-valid");
                setTimeout(() => {
                console.log("Sesión iniciada:", user);
                localStorage.setItem("userLog", JSON.stringify(user));
                localStorage.setItem("auth", "true");
                window.location.href = "homeCompany.html"; 
                }, 700);
            } else {
                document.getElementById("email").classList.add("is-invalid");
                document.getElementById("password").classList.add("is-invalid");
                
            }
        })
        .catch(error => {
            console.error("Error al iniciar sesión:", error);
            alert("Error en el servidor. Intenta más tarde.");
        });
         e.preventDefault(); 
};

btnLogIn.addEventListener('click', logInFunction)


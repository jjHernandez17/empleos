const btnRegister = document.getElementById("btnRegister");

function registerUser() {
    const infullName = document.getElementById("fullName").value;
    const inemail = document.getElementById("email").value;
    const inpassword = document.getElementById("password").value;
    const inTypeUser = document.getElementById("typePerson")
    let user
    if (inTypeUser.checked) {
        user = "empresa"
    } else {
        user = "persona"
    }

    

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: infullName,
            correo: inemail,
            password: inpassword,
            typePerson: user
            
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Usuario creado:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        alert("Usuario registrado con exito")
    event.preventDefault();
}


btnRegister.addEventListener('click',registerUser);
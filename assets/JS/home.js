const logOut = document.getElementById("logOut")
const welcomeContainer = document.getElementById("welcomeContainer")
const role = document.getElementById("role")
function logOutFunction() {
    localStorage.setItem("auth","false");
    guardianSignOut()

}

function renderOpenWindow() {
    userLog = JSON.parse(localStorage.getItem("userLog"))
    welcomeContainer.innerHTML += " " + userLog.name
    role.innerHTML = userLog.typePerson
}

document.addEventListener('DOMContentLoaded',renderOpenWindow)
logOut.addEventListener('click',logOutFunction)
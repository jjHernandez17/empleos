function setupEditButton() {
  const btnEditProfile = document.getElementById("btnEditProfile");
  const nameCompany = document.getElementById("nameCompany");
  const sectorCompany = document.getElementById("sectorCompany");
  const industryCompany = document.getElementById("industryCompany");
  const descriptionCompany = document.getElementById("descriptionCompany");
  const addressCompany = document.getElementById("addressCompany");

  btnEditProfile.addEventListener("click", () => {
    const isEditable = nameCompany.getAttribute("contenteditable") === "true";

    if (!isEditable) {
      nameCompany.setAttribute("contenteditable", "true");
      sectorCompany.setAttribute("contenteditable", "true");
      industryCompany.setAttribute("contenteditable", "true");
      descriptionCompany.setAttribute("contenteditable", "true");
      addressCompany.setAttribute("contenteditable", "true");

      [nameCompany, sectorCompany, industryCompany, descriptionCompany, addressCompany].forEach(el => {
        el.classList.add("editable");
      });

      btnEditProfile.textContent = "Guardar";
      btnEditProfile.classList.replace("btn-outline-primary", "btn-success");

    } else {

      nameCompany.setAttribute("contenteditable", "false");
      sectorCompany.setAttribute("contenteditable", "false");
      industryCompany.setAttribute("contenteditable", "false");
      descriptionCompany.setAttribute("contenteditable", "false");
      addressCompany.setAttribute("contenteditable", "false");

      [nameCompany, sectorCompany, industryCompany, descriptionCompany, addressCompany].forEach(el => {
        el.classList.remove("editable");
      });

      btnEditProfile.textContent = "Editar";
      btnEditProfile.classList.replace("btn-success", "btn-outline-primary");

      const userLog = JSON.parse(localStorage.getItem("userLog"))
      
      fetch(`http://localhost:3000/users/${userLog.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          profileCompany: {
          nameCompanyProfile: nameCompany.innerText,
          sectorCompanyProfile: sectorCompany.innerText,
          industryCompanyProfile: industryCompany.innerText,
          descriptionCompanyProfile: descriptionCompany.innerText,
          addressCompanyProfile: addressCompany.innerText
          }
          
        })
      });

      userLog.profileCompany = {
        nameCompanyProfile: nameCompany.innerText,
        sectorCompanyProfile: sectorCompany.innerText,
        industryCompanyProfile: industryCompany.innerText,
        descriptionCompanyProfile: descriptionCompany.innerText,
        addressCompanyProfile: addressCompany.innerText

      }

      nameCompany.innerText = nameCompany.innerText
      localStorage.setItem("userLog", JSON.stringify(userLog))
      
    }

    userLog = JSON.parse(localStorage.getItem("userLog"))
      
    nameCompany.innerText = userLog.profileCompany.nameCompany
  });
}

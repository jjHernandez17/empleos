btnEditProfile = document.getElementById("btnEditProfile");
nameComapany = document.getElementById("nameComapany");
sectorCompany = document.getElementById("sectorCompany");
industryCompany = document.getElementById("industryCompany");
descriptionCompany = document.getElementById("descriptionCompany");
adressCompany = document.getElementById("adressCompany");

function editProfileCompany() {
    const editable = nameComapany.getAttribute("contenteditable") === "true";
    const editable2 = sectorCompany.getAttribute("contenteditable") === "true";
    const editable3 = industryCompany.getAttribute("contenteditable") === "true";
    const editable4 = descriptionCompany.getAttribute("contenteditable") === "true";
    const editable5 = adressComapany.getAttribute("contenteditable") === "true";

      if (!editable && !editable2 && !editable3 && !editable4 && !editable5) {
        nameComapany.setAttribute("contenteditable", "true");
        sectorCompany.setAttribute("contenteditable", "true");
        industryCompany.classList.add("editable");
        descriptionCompany.setAttribute("contenteditable", "true");
        adressComapany.setAttribute("contenteditable", "true");
        btnEditProfile.textContent = "Guardar";
        btnEditProfile.classList.replace("btn-outline-primary", "btn-success");
      } else {
        nameComapany.setAttribute("contenteditable", "false");
        sectorCompany.setAttribute("contenteditable", "false");
        industryCompany.setAttribute("contenteditable", "false");
        descriptionCompany.setAttribute("contenteditable", "false");
        adressComapany.setAttribute("contenteditable", "false");

        nameComapany.classList.remove("editable");

        btnEditProfile.textContent = "Editar";
        btnEditProfile.classList.replace("btn-success", "btn-outline-primary");

        // Aquí podrías guardar los cambios en localStorage o base de datos
        const nuevoTexto = descripcion.innerText;
        console.log("Descripción guardada:", nuevoTexto);
      }
    };

btnEditProfile


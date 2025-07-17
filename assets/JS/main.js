import { renderProfileCompany } from "../PAGES/profileCompany.js";

const btnProfileCompany = document.getElementById("btnProfileCompany");

btnProfileCompany.addEventListener("click", () => {
  renderProfileCompany();
});

renderProfileCompany()
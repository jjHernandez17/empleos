export function renderProfileCompany() {
    const containerHomeCompany = document.getElementById("containerHomeCompany");
    containerHomeCompany.innerHTML = ` <div class="container container-size overflow-auto  ">
    <div class="p-5 card card-profile">
      <div class="text-center mb-4">
        <img src="assets/IMAGES/logo.png" class="logo-profile " alt="Logo Empresa">
        <h2 contenteditable="false" id="nameCompany" class=" p-2 card text-title">Nombre de la Empresa</h2>
      </div>

      <div class="row text-center mb-4">
        <div class="col-md-6">
          <strong class="section-title mb-1">Sector</strong>
          <p contenteditable="false" class="min-h p-2 card section-content" id="sectorCompany"></p>
        </div>
        <div class="col-md-6">
          <strong class="section-title mb-1">Industria</strong>
          <p contenteditable="false" class="min-h p-2 card section-content" id="industryCompany"></p>
        </div>
      </div>

      <div class="mb-3">
        <strong class="section-title mb-1">Descripción</strong>
        <p contenteditable="false" class="section-content card p-3 " id="descriptionCompany">
          
        </p>
      </div>

      <div>
        <strong class="section-title mb-1">Dirección</strong>
        <p class="min-h p-2 card section-content" id="addressCompany"></p>
      </div>
    </div>
  </div>
    <div class="text-end" >
      <button id="btnEditProfile" class="btn btn-primary  mt-3" >Editar</button>
    </div>

`
  setupEditButton();

}
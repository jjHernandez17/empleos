export function renderProfileCompany() {
    const containerHomeCompany = document.getElementById("containerHomeCompany");
    containerHomeCompany.innerHTML = ` <div class="container container-size overflow-auto  ">
    <div class="p-5 card card-profile">
      <div class="text-center mb-4">
        <img src="assets/IMAGES/logo.png" class="logo-profile " alt="Logo Empresa">
        <h2 contenteditable="false" id="nameComapany" class="text-title">Nombre de la Empresa</h2>
      </div>

      <div class="row text-center mb-4">
        <div class="col-md-6">
          <strong class="section-title mb-1">Sector</strong>
          <p contenteditable="false" class="section-content" id="sectorCompany">Tecnología</p>
        </div>
        <div class="col-md-6">
          <strong class="section-title mb-1">Industria</strong>
          <p contenteditable="false" class="section-content" id="industryCompany">Software</p>
        </div>
      </div>

      <div class="mb-3">
        <strong class="section-title mb-1">Descripción</strong>
        <p contenteditable="false" class="section-content " id="descriptionCompany">
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
          Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.Somos una empresa enfocada en desarrollar soluciones digitales para conectar talento con oportunidades laborales.
        </p>
      </div>

      <div>
        <strong class="section-title mb-1">Dirección</strong>
        <p class="section-content" id="adressCompany">Calle 123 #45-67, Bogotá, Colombia</p>
      </div>
    </div>
  </div>
    <div class="text-end" >
      <button id="btnEditProfile" class="btn btn-primary  mt-3" >Editar</button>
    </div>

`
}
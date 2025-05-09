import CartWidget from "./CartWidget"
/*     COMPONENTE HIJO     */

function Navbar() {
  return (
    <>

      <nav class="navbar navbar-expand-lg NavbarStyles">   
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse estilos-menu" id="navbarSupportedContent" >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item me-5">
              <a class="nav-link active" aria-current="page" href="#">Nosotros</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link active" aria-current="page" href="#">Soluciones</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link active" aria-current="page" href="#">Proyectos</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link active" aria-current="page" href="#">Contacto</a>
            </li>
            <li class="nav-item me-5">
              <button type="button" class="btn btn-outline-secondary">AR</button>
            </li>
          </ul>
                        
        </div>   
      </nav>

      <CartWidget/>
      
    </>
  )
}

export default Navbar
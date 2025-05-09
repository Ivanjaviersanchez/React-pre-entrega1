import Navbar from "./Navbar"

/*     COMPONENTE HIJO     */

function Header() {
  return (
    <>
        <div className="HeaderStyles">
          
          <a class="navbar-brand me-5" href="#"><img class="d-inline-block align-text-top LogoStyles" src="/src/assets/logo.png" alt="logo"/>TecnoBox</a>
          
          <Navbar/>

        </div>  
    </>
  )
}

export default Header
import Navbar from "./Navbar"
import logo from "../assets/logo.png"
/*     COMPONENTE HIJO     */

function Header() {
  return (
    <>
        <div className="HeaderStyles">
          
          <a class="navbar-brand me-5" href="#"><img class="d-inline-block align-text-top LogoStyles" src={logo} alt="logo"/>TecnoBox</a>
          
          <Navbar/>

        </div>  
    </>
  )
}

export default Header
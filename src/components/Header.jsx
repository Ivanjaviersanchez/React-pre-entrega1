import Navbar from "./Navbar"

/*     COMPONENTE HIJO     */

function Header() {
  return (
    <>
        <div className="HeaderStyles">
          
          <a class="navbar-brand me-5" href="#"><img class="d-inline-block align-text-top" src="" alt="logo"/></a>

          <Navbar/>

        </div>  
    </>
  )
}

export default Header
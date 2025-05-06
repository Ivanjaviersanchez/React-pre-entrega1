import Navbar from "./Navbar"
import CartWidget from "./CartWidget"

/*     COMPONENTE HIJO     */

function Header() {
  return (
    <>
        <div className="HeaderStyles">
            <Navbar/>
            <CartWidget/>
        </div>
        
    </>
  )
}

export default Header
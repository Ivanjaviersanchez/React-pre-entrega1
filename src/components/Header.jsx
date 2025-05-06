import Navbar from "./Navbar"
import Search from "./Search"

/*     COMPONENTE HIJO     */

function Header() {
  return (
    <div>
        <Navbar/>
        <Search/>
    </div>
  )
}

export default Header
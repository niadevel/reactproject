import CartWidget from "./CartWidget"
import "./navBar.css"

function NavBar() {
    return <nav className="nav">

        <a href="/" className="siteTitle">Nia Joyas</a>
        <ul>
            <li><a href="/Pulseras">Pulseras</a></li>
            <li><a href="/Collares">Collares</a></li>
            <li><a href="/Anillos">Anillos</a></li>
        </ul> 
        <CartWidget/>
    </nav>
}

export default NavBar
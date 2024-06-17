import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import '../css/header.css'
function Header() {
    return (
        <header className="header">
            
         <img src="https://static.vecteezy.com/system/resources/previews/010/227/284/non_2x/fake-icon-is-red-on-a-transparent-background-logo-stamp-illustration-vector.jpg" alt="" className="header-logo" />
         
            <div className="nav-links">
                <NavLink to='/' className='nav-item'>Ana Sayfa</NavLink>
                <NavLink to='/menu' className='nav-item'>Menü</NavLink>
                <NavLink to='/contact' className='nav-item'>Bize Ulaşın</NavLink>
            </div>
        </header>
    );
}

export default Header;
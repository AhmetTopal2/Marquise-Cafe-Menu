import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
    return (
        <header className="header">

            <img src="https://picsum.photos/1000" alt="" className="header-logo" />

            <div className="nav-links">
                <NavLink to='/' className='nav-item'>Ana Sayfa</NavLink>
                <NavLink to='/menu' className='nav-item'>Menü</NavLink>
                <NavLink to='/contact' className='nav-item'>Bize Ulaşın</NavLink>
            </div>
        </header>
    );
}

export default Header;
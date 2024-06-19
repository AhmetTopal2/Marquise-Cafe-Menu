import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import '../css/header.css'
function Header() {
    return (
        <header className="header">

            <img src="https://lh4.googleusercontent.com/OYD6GZh0bL7ZL1ZfVc1jU84QPnQpXC8ctQOAIItZ07g-iGGQC3889gGa3dx7ahKhbyyYLrjGrbRSR68J0QR3iEs=w16383" alt="" className="header-logo" />

            <div className="nav-links">
                <NavLink to='/' className='nav-item'>Ana Sayfa</NavLink>
                <NavLink to='/menu' className='nav-item'>Menü</NavLink>
                <NavLink to='/contact' className='nav-item'>Bize Ulaşın</NavLink>
            </div>
        </header>
    );
}

export default Header;
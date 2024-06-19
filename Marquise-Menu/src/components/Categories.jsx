import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Categories() {
    const linkStyle = {
        textDecoration: 'none'
    };

    return (
        <>
            <Link to='/menu/patisserie' style={linkStyle}>
                <div className="card">
                    <img src="https://picsum.photos/200/200" alt="" />
                    <div className="card-content">
                        <h3>Patisserie</h3>
                    </div>
                </div>
            </Link>
            <Link to='/menu/kahvaltı' style={linkStyle}>
                <div className="card">
                    <img src="https://picsum.photos/200/200" alt="" />
                    <div className="card-content">
                        <h3>Kahvalti</h3>
                    </div>
                </div>
            </Link>
            <Link to='/menu/sicakicecek' style={linkStyle}>
                <div className="card">
                    <img src="https://picsum.photos/200/200" alt="" />
                    <div className="card-content">
                        <h3>Sicak Icecek</h3>
                    </div>
                </div>
            </Link>
            <Link to='/menu/sogukicecek' style={linkStyle}>
                <div className="card">
                    <img src="https://picsum.photos/200/200" alt="" />
                    <div className="card-content">
                        <h3>Soguk Icecek</h3>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Categories;

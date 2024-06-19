import { Link } from "react-router-dom/cjs/react-router-dom.min";

function MenuItem() {
    return (
        <>
            <Link to='menu'>
                <div className="menu-item">
                    <img src="https://picsum.photos/320/200" alt="resim" />
                    <hr />
                    <div>
                        <h3>Deneme</h3>
                    </div>
                </div>
            </Link>
            <div className="menu-item">
                <img src="https://picsum.photos/320/200" alt="resim" />
                <hr />
                <div>
                    <h3>Deneme</h3>
                </div>
            </div>
            <div className="menu-item">
                <img src="https://picsum.photos/320/200" alt="resim" />
                <hr />
                <div>
                    <h3>Deneme</h3>
                </div>
            </div>
            <div className="menu-item">
                <img src="https://picsum.photos/320/200" alt="resim" />
                <hr />
                <div>
                    <h3>Deneme</h3>
                </div>
            </div>
        </>
    );
}

export default MenuItem;
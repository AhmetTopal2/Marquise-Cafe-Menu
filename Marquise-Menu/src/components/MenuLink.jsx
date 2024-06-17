import { Button } from 'reactstrap'
import '../css/menuButton.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function MenuLink() {
    let history = useHistory()
    const clickHandler = () => {
        history.push('/menu')
    }
    return (
        <div className="menu-button-div">
            <Button className='menu-button'
                onClick={clickHandler}
                color="primary"
            >
                Menü
            </Button>
        </div>
    );
}

export default MenuLink;
import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Categories from '../components/Categories';
import { Button } from 'reactstrap';
import Patisserie from '../components/Patisserie';
import Kahvalti from '../components/Kahvalti'

function Menu() {
    const history = useHistory();
    const clickHandler = () => {
        history.push('/menu/')
    }
    return (
        <>
            <Switch>
                <Route path='/menu/' exact>
                    <Categories />
                </Route>
                <Route path='/menu/patisserie'>
                    <Patisserie />
                    <div className='back-btn-div'>
                        <Button onClick={clickHandler} className='back-btn'>Geri</Button>
                    </div>
                </Route>
                <Route path='/menu/kahvaltı'>
                    <Kahvalti />
                    <div className='back-btn-div'>
                        <Button onClick={clickHandler} className='back-btn'>Geri</Button>
                    </div>
                </Route>
                <Route path='/menu/sicakicecek'>
                    <h1>Sicak Icecek</h1>
                    <div className='back-btn-div'>
                        <Button onClick={clickHandler} className='back-btn'>Geri</Button>
                    </div>
                </Route>
                <Route path='/menu/sogukicecek'>
                    <h1>Soguk Icecek</h1>
                    <div className='back-btn-div'>
                        <Button onClick={clickHandler} className='back-btn'>Geri</Button>
                    </div>
                </Route>

            </Switch>

        </>
    );
}

export default Menu;
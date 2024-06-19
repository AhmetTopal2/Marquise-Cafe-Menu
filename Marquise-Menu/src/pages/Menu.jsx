import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Categories from '../components/Categories';
import { Button } from 'reactstrap';


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
                    <h1>Patisserie</h1>
                    <Button onClick={clickHandler}>Geri</Button>
                </Route>
                <Route path='/menu/kahvaltı'>
                    <h1>Kahvalti</h1>
                    <Button onClick={clickHandler}>Geri</Button>
                </Route>
                <Route path='/menu/sicakicecek'>
                    <h1>Sicak Icecek</h1>
                    <Button onClick={clickHandler}>Geri</Button>
                </Route>
                <Route path='/menu/sogukicecek'>
                    <h1>Soguk Icecek</h1>
                    <Button onClick={clickHandler}>Geri</Button>
                </Route>

            </Switch>

        </>
    );
}

export default Menu;
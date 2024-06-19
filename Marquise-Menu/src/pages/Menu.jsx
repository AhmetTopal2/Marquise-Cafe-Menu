import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import MenuItemList from '../components/MenuItemList'

function Menu() {
    return (
        <>
            <Switch>
                <Route path='/menu/' exact>
                    <MenuItemList />
                </Route>
            </Switch>

        </>
    );
}

export default Menu;
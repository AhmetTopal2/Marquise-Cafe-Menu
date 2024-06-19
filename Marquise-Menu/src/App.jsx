
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './css/home.css'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Header from './components/Header'


function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/menu'>
          <Menu />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </>
  )
}

export default App

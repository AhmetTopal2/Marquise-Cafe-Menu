
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'

function App() {
  return (
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/menu'>
        <Menu />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
    </Switch>
  )
}

export default App

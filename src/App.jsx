
import './App.css'
import { Routes,Route } from 'react-router'
import Dash from './Pages/Dash'
import Landing from './Pages/Landing'
import Signup from './Pages/Signup'
import Edit from './Pages/Edit'

function App() {

  return (
    <>
   
   <Routes>

    <Route path='/' Component={Landing}></Route>

    <Route path='/dash' Component={Dash}></Route>
    <Route path='/signup' Component={Signup}></Route>
    <Route path='/edit/:id' Component={Edit}></Route>

    


   </Routes>
      
    </>
  )
}

export default App

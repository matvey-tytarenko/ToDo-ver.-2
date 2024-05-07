import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ToDo from './pages/ToDo'
import Login from './pages/Login'
import Register from './pages/Register'
import Verification from './pages/Verification'
import Private_Office from './pages/Private Office'
import Settings from './pages/Settings'

function App() {

  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<ToDo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/verification' element={<Verification />} />
        <Route path='/office' element={<Private_Office />} />
        <Route path='/settings' element={<Settings />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

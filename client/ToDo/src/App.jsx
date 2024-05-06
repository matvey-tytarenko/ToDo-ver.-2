import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ToDo from './pages/ToDo'
import Login from './pages/Login'
import Register from './pages/Register'
import Verification from './pages/Verification'

function App() {

  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<ToDo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/verification' element={<Verification />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

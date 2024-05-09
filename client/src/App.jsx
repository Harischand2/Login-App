import './App.css'
import {Routes, Route} from 'react-router-dom'
import axios from "axios"
import NavBar from './components/NavBar';
import Home from  './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext';
import UpdateProfile from './pages/UpdateProfile';
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
 

return (
    <UserContextProvider>
    <NavBar/>
    <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/profile" element={<UpdateProfile/>}/>

    </Routes>
    </UserContextProvider>
  )
}

export default App

import { useContext} from "react"
import { UserContext } from "../../context/userContext"
import axios from  'axios'
import '../styles/home.css'

export default function Home() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout= async()=>{
    try{
      const {data} = await axios.post('/logout')
      console.log("data " ,data)
      setUser(data)
    }
    catch(err){
      console.log("error ", err)
    }
  }
  const deleteUser = async()=>{
    try{
      console.log("id : ", user._id)
      const {data} = await axios.post('/delete', {
       id :user._id
      })
    
      setUser(data)


    }
    catch(error){
      console.log("error " , error)
    }


  }

  return (
  user ? 
    <div className="container home_box">
    <div className="row r_b d-flex justify-content-center align-items-center">
      <div className="col d-flex flex-column">
      <h2 className="header text-center">Welcome {user.firstname } {user.lastname}!</h2>
      <button className="btn btn-secondary home_btn align-self-center" onClick={handleLogout}>Logout</button>    
      <button className="btn btn-secondary  home_btn align-self-center" onClick={deleteUser}>Delete</button>    
      <a className="btn btn-secondary  home_btn align-self-center" href="/profile"> Update</a>
      </div>
    </div>
      

    </div>
   :     <div className="container home_box">
   <div className="row r_b d-flex justify-content-center align-items-center">
     <div className="col d-flex flex-column">
   <h1 className="text-center">Welcome Home!</h1>
     <a className="btn btn-secondary  home_btn align-self-center" href="/register">Register</a>
     </div>
   </div>
     

   </div>
  )
}

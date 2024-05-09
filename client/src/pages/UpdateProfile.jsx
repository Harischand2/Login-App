import { useContext, useState, useEffect} from "react"
import { UserContext } from "../../context/userContext"

import axios from 'axios'
import {toast} from 'react-hot-toast'
// helps to redirect to the login page after successul registrations
import { useNavigate } from 'react-router-dom'
import '../styles/register.css'

export default function UpdateProfile() {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate()
  console.log(user)
  const [data, setData] = useState({
    firstname:  '',
    lastname:  ''
  })
 useEffect(()=>{
  if(user){
      setData(
    {
      firstname: user.firstname,
      lastname: user.lastname
    }
  )
  }
 }, [user])

 
  const updateUser= async (event)=>{
    event.preventDefault();
    const {firstname, lastname } = data
    try{
      const {data} = await axios.post('/update',{
        firstname, lastname, "id": user.id
      } )
      console.log("from update ", data)
      if(data.error){
        toast.error(data.error)
      }
        setUser(data)
        setData({})
        toast.success("Update was successful")
        navigate('/')
    }
    catch(err){
      console.log("err ", err)
    }
  }
  return(
    <div className="container register_box">
    <div className="row r_b d-flex justify-content-center align-items-center">
      <div className="col-6 register_form">
    <form onSubmit={updateUser}  className="d-flex  flex-column">
    <div className="mb-3">
      <label htmlFor="fn" className="form-label">First Name</label>
      <input  value={data.firstname} onChange={(e)=> setData({...data, firstname: e.target.value})}  type="text" className="form-control" id="fn"  placeholder="Enter first name" aria-describedby="firstnameHelp"/>
    </div>
  
    <div className="mb-3">
      <label htmlFor="ln" className="form-label">Last Name</label>
      <input value={data.lastname} onChange={(e)=> setData({...data, lastname: e.target.value})} type="text" className="form-control" id="ln" aria-describedby="lastnameHelp" placeholder="Enter last name"/>
    </div>

    <button type="submit" className="btn btn-primary r_btn align-self-center">Update</button>
  </form>
      </div>
    </div>
  
      </div>
    );
}

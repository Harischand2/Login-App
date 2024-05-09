
import {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import '../styles/register.css'
// helps to redirect to the login page after successul registrations
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email:'',
    password: ''
  })

  const registerUser= async (event)=>{
    event.preventDefault();
    const {firstname, lastname, email, password } = data
    try{
      const {data} = await axios.post('/register',{
        firstname, lastname, email, password
      } )
      if(data.error){
        toast.error(data.error)
      }else{
        setData({})
        toast.success("Registered Successfully")
        navigate('/login')
      }
    }
    catch(err){
      console.log("err ", err)
    }

    console.log("register data:  ", data)
  }
  return (
  <div className="container register_box">
  <div className="row r_b d-flex justify-content-center align-items-center">
    <div className="col-6 register_form">
  <form onSubmit={registerUser}  className="d-flex  flex-column">
  <div className="mb-3">
    <label htmlFor="fn" className="form-label">First Name</label>
    <input  value={data.firstname} onChange={(e)=> setData({...data, firstname: e.target.value})}  type="text" className="form-control" id="fn"  placeholder="Enter first name" aria-describedby="firstnameHelp"/>
  </div>

  <div className="mb-3">
    <label htmlFor="ln" className="form-label">Last Name</label>
    <input value={data.lastname} onChange={(e)=> setData({...data, lastname: e.target.value})} type="text" className="form-control" id="ln" aria-describedby="lastnameHelp" placeholder="Enter last name"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input value={data.email} onChange={(e)=> setData({...data, email: e.target.value})} type="email" className="form-control" id="Email1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {/* <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input value={data.password} onChange={(e)=> setData({...data, password: e.target.value})} type="password" className="form-control" id="Password1" placeholder="Enter password"/>
  </div>
  <button type="submit" className="btn btn-primary r_btn align-self-center">Submit</button>
</form>
    </div>
  </div>

    </div>
  );
}

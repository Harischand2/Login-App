import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import "../styles/login.css";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (event) => {
    event.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        console.log("login data ", data);
        setData({});
        setUser(data);
        toast.success("You have successfull loged in");
        navigate("/");
      }
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <div className="container login_box">
      <div className="row  r_b d-flex justify-content-center align-items-center">
        <div className="col-6 login_form">
          <form onSubmit={loginUser} className="d-flex  flex-column">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="email"
                className="form-control"
                id="Email1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <div id="emailHelp" className="form-text">
                We will never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type="password"
                className="form-control"
                id="Password1"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn btn-primary l_btn align-self-center">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

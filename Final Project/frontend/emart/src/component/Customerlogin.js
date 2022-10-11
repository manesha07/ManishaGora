import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth-service";

const CustomerLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("hiiii");
        try {
            console.log("e",email,password); 
          await AuthService.customerlogin(email, password).then(
            () => {
                console.log("successss");
                console.log("eht",AuthService.getCurrentUser());
              navigate("/");
              window.location.reload();
            },
            (error) => {
              console.log("o",error);
            }
          );
        } catch (err) {
          console.log("str",err);
        }
      };

    return (
      <div className="form">
      <h1 className="heading form-head">Login</h1>
      <form style={{width:"400px", margin:"auto"}}  onSubmit={handleLogin}>
          <div class="form_group">
              <label for="InputEmail1">Email address</label>
              <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form_group">
              <label for="InputPassword">Password</label>
              <input type="password" class="form-control" id="InputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div class="form_check mb-2">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="form_btn"> Submit </button>
      </form>
      </div>
    )
}
export default CustomerLogin;
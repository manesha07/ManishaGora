
import React, { useState } from "react";
import AuthService from "../services/auth-service";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
  
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
          await AuthService.register(email, password,name,username).then(
            (response) => {
              // check for token and user already exists with 200
                console.log("Sign up successfully", response);
            //   navigate("/home");
            //   window.location.reload();
            },
            (error) => {
              console.log(error);
            }
          );
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div className="form">
        <h1 className="heading form-head">Register</h1>
        <form className="register-form" onSubmit={handleSignup}>
            <div class="form_group">
                <label for="InputName">Name</label>
                <input type="text" class="form_control" id="InputName" placeholder="Enter Name"  value={name}
          onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="form_group">
                <label for="Username">Username</label>
                <div class="input_group">
                    <input type="text" class="form_control" id="Username" placeholder="Username"   value={username}
          onChange={(e) => setUsername(e.target.value)}/>
                </div>
            </div>
            <div class="form_group ">
                <label for="InputEmail1">Email address</label>
                <input type="email" class="form_control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form_group">
                <label for="InputPassword">Password</label>
                <input type="password" class="form_control" id="InputPassword1" placeholder="Password"  value={password}
          onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="form_btn">Submit</button>
        </form>
        {/* <ShowModal close={this.onCancel} message={message} /> */}
        </div>
    )
}
export default Register;
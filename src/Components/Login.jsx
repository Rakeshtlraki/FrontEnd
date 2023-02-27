import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")

     let handleSubmit=(e)=>{
        e.preventDefault()
     }
    return (
        <div className="login container">
          <h1>Login to Enter the HomePage</h1>
          <div className="card-body mt-5 px-5 ">
            <form action="" onSubmit={{handleSubmit}}>
                <div className="Email">
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-contrl" placeholder="email address" name="email" />
                </div>
                <div className="Password">
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-contrl" placeholder="password" name="password" />
                </div>
                <div className="options">
                    <button className="btn btn-outline-primary">Login</button>
                </div>
                <div className="register">
                    <p>Are you a new user</p>
                    <Link to="/register" className="btn btn-outline-success">Register</Link>
                </div>
            </form>
          </div>
        </div>
    );
}

export default Login;
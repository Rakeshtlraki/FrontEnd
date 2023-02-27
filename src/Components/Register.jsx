import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Register = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [conpassword, setConpassword] = useState("")
    let [name, setName] = useState("")
    let [mobile, setMobile] = useState("")
    let navigate = useNavigate()

    let Submit = (e) => {
        e.preventDefault()
        let data = { name, email, password, conpassword, mobile }
        if (name && email && (password == conpassword)) {
            axios.post('http://localhost:1804/register', data).then((res) => {
                    alert(res.data.message)
                    navigate('/')
                    console.log(data);
                })
        } else {
            alert("inavlid credentials")
        }
    }
    return (
        <div className="register">
            <h1>Register Here</h1>
            <div className="signUp">
                <form action="" onSubmit={Submit}>
                    <div className="name">
                        <input type="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" name="name" on />
                    </div>
                    <div className="mobile">
                        <input type="num" value={mobile} onChange={(e) => setMobile(e.target.value)} className="form-control" placeholder="Mobile Number" name="number" />
                    </div>
                    <div className="Email">
                        <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" name="email" />
                    </div>
                    <div className="Password">
                        <input type="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" name="password" />
                    </div>
                    <div className="confirmPassword">
                        <input type="Password" value={conpassword} onChange={(e) => setConpassword(e.target.value)} className="form-control" placeholder="Password" name="password" />
                    </div>
                    <div className="signup">
                        <button className="btn btn-outline-primary">Register</button>
                    </div>
                  </form>
                  <div className="login_Button">
                        <p>Already a user</p>
                        <Link to="/" className="btn btn-outline-primary">Login</Link>
                    </div>
            </div>
        </div>
    );
}

export default Register;
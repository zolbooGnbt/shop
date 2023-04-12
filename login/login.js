import React from "react";
import { useState } from "react";
import axios from "axios";
import LoginFirst from "./loginFirst";
import LoginSecond from "./loginSecond";
import Signup from "./signup";


const Login = ({ data}) => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("")
    const [loginName, setLoginName] = useState("");
    const [loginPassword, setLoginPassword] = useState("")
    const [toggle, setToggle] = useState(true);
    const [clickedSignup, setClickedSignup] = useState(false);


    function ClickedSignUp() {
        setClickedSignup(true)
    }

    function SignUpHandler() {
        setUsername("");
        setPassword("");
        setRePassword("");

        var users = {
            userName: userName,
            password: password,
            admin: false
        }
        const checkData = data.find((userCheck) => userCheck.userName === userName);
        if (checkData) {
            alert("Username already taken!")
        } else {
            if (userName === 'zolboo') {
                axios.post("https://shoppt-2f8b2-default-rtdb.asia-southeast1.firebasedatabase.app/users.json", users)
                    .then(response => {
                        users.admin = true;
                        localStorage.setItem("admin", response.data.admin)
                    }).catch(error => alert("error"))
            } else if (password === rePassword) {
                    axios.post("https://shoppt-2f8b2-default-rtdb.asia-southeast1.firebasedatabase.app/users.json", users)
                        .then(res => {
                            localStorage.setItem("currentUser", res.data.currentUser)
                            alert("amjilttai burteglee")
                        }).catch(error => alert("error"))
                } else {
                    alert("Password not matching!")
                }

        }
    }

    function CheckUsername() {

        const usernameCheck = data.find((user) => user.userName === loginName);
        if (usernameCheck) {
            setToggle(!toggle)
        } else {
            alert("Мэйл хаяг, эсвэл утасны дугаар оруулна уу")
        }
    }

    function LoginHandler(e) {
        setLoginName(e.target.value)

        const userData = data.find((user) => user.userName === loginName);

        if (userData) {
            if(loginName==="zolboo"){
                document.location.pathname = "../home.js"
                localStorage.setItem("admin",data.admin)
            }
            else if (userData.password !== loginPassword) {
                alert("invalid username or password, try again");
                window.location.reload();
            } else {
                document.location.pathname = "../home.js"
                localStorage.setItem("currentUser",data.currentUser)
            }
        } else {
            alert("user not found")
            window.location.reload();
        }

    }




    return (<div>
        {!clickedSignup ? (
            <div>
                {toggle
                    ? (
                        <LoginFirst ClickedSignUp={ClickedSignUp} CheckUsername={CheckUsername} setLoginName={setLoginName} />
                    )
                    : (
                        <LoginSecond loginName={loginName} LoginHandler={LoginHandler} setLoginName={setLoginName} setLoginPassword={setLoginPassword} />
                    )
                }
            </div>)
            : (
                <Signup userName={userName} setUsername={setUsername} password={password} setPassword={setPassword}
                    rePassword={rePassword} setRePassword={setRePassword} SignUpHandler={SignUpHandler} />
            )}

        {
            data.map = ((item, index) => (
                <li key={index}>{item.userName}{item.password}</li>
            ))
        }

    </div>
    )
}
export default Login;
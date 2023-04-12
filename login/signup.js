const Signup = ({userName,setUsername,password,setPassword,rePassword,setRePassword,SignUpHandler})=>{
    return(
        <div className="signup-box">
                <h3>SignUp</h3>
                <label className="h3" >Username</label>
                <input
                    className="input"
                    type="text"
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}>
                </input>
                <label className="h3">Password</label>
                <input
                    className="input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <label className="h3">Re-Password</label>
                <input
                    className="input"
                    type="password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}>
                </input>
                <div className="line">
                    <button className="back-btn" >Буцах</button>
                    <button className="login-btn" onClick={SignUpHandler}>SignUp</button>
                </div>

            </div>
    )
}
export default Signup;
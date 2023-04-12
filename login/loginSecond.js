const LoginSecond = ({ loginName, setLoginName, loginPassword,setLoginPassword, LoginHandler }) => {
    
    return (
        <div className="Box">
            <h1>Нэвтрэх</h1>
            <label className="h3" >Нэвтрэх</label>
            <input
                className="input"
                type="text"
                value={loginName}
                onChange={setLoginName}
                placeholder="И-майл хаяг эсвэл гар утасны дугаар"
            />
            

            <label className="h3">Нууц үг</label>
            <input
                className="input"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
            >
            </input>
            <div className="line">
                <button className="back-btn">Буцах</button>
                <button className="login-btn" onClick={LoginHandler}>Нэвтрэх</button>
            </div>
        </div>

    )
}
export default LoginSecond;
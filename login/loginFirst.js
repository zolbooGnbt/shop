const LoginFirst =({loginName, setLoginName,CheckUsername,ClickedSignUp})=>{
return(
    <div>
        <div className="Box">
                            
                            <h1>Нэвтрэх</h1>
                            <label className="h3" >Нэвтрэх</label>
                            <input
                                className="input"
                                type="text"
                                value={loginName}
                                onChange={(e) => setLoginName(e.target.value)}
                                placeholder="И-майл хаяг эсвэл гар утасны дугаар"
                            />

                            <button className="continue" onClick={CheckUsername}>Үргэлжлүүлэх</button>
                            <div className="signup-line">
                                <p>Шинэ хэрэглэгч болох</p>
                                <button onClick={ClickedSignUp} className="signup-button">
                                    Бүртгүүлэх
                                </button>
                            </div>
                        </div>
    </div>
)
}
 export default LoginFirst;
import './login.css'

export default function Login() {
    return (
        <div className="login">
            <div className="logiWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social Media</h3>
                    <span className="loginDescription">
                        Connect with friends and the world around you on Social Media
                    </span>
                    <img src="assets/login/tolerance-3824208_1280.jpg" alt="" className='loginImg'/>
                    
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Email' type="email" name="" id=""  className='loginInput'/>
                        <input placeholder='Password' type="password" name="" id=""  className='loginInput'/>
                        <button type="submit" className="loginButton">Log in</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}
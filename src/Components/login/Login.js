import "./Login.css"
import { Link } from "react-router-dom";
import { Header } from "../../Components/header/header";

const Login = ()=> {  
    return(
    <div class="container">
        <Header/>

             <div class = "signup-page">
                <div class = "signup-page-content">
                    <form class = "signup-page-form">
                        <h2>Log me in to Giftkart!</h2>
                        <input type = "text"
                            class = "form-signup-input"
                            placeholder="Enter your Email"/>
                        <input type = "password"
                            class = "form-signup-input"/>
                            <Link to = "/Signup" class = "form-login-link">Forgot Password? </Link>
                        <input type = "button" class = "form-signup-btn signup" value = "Log in"/>
                    </form>
                </div>
            </div>
    </div>
     );
}

export {Login};
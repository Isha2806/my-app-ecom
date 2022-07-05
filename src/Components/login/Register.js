import "./Login.css" ;

import { Header } from "../../Components/header/header";
import { Logo } from "../logo/Logo";
import { Link } from "react-router-dom";

const Register = ()=> {  
    return(
        <div class="container">
            <Header/>
            <div class = "signup-page">
                <div class = "signup-page-content">

                    <h2> Register yourself for greatness!!</h2>
                 <form class = "signup-page-form">
                     <input type = "text"
                            class = "form-signup-input"
                            placeholder="Enter your Email"/>
                        <input type = "password"
                            class = "form-signup-input"/>
                            <Link to = "/Login" class = "form-login-link">Already have an account?</Link>
                        <input type = "button" class = "form-signup-btn signup" value = "Sign Up"/>
                    </form>
                    <Logo/>

                </div>
            </div>
    </div>
     );
}

export {Register};
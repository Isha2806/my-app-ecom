import "./Login.css" ;
const Register = ()=> {  
    return(
        <div class="container">
        <Link to="/products" class="logo">
             <i class="fab fa-apple"></i></Link>
             <div class = "signup-page">
                <div class = "signup-page-content">
                    <form class = "signup-page-form">
                        <input type = "text"
                            class = "form-signup-input"
                            placeholder="Enter your Email"/>
                        <input type = "password"
                            class = "form-signup-input"/>
                            <Link to = "/Login" class = "form-login-link">Already have an account?</Link>
                        <input type = "button" class = "form-signup-btn signup" value = "Sign Up"/>
                    </form>
                </div>
            </div>
    </div>
     );
}

export {Register};
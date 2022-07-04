import "./Register.css" ;
const Register = ()=> {  
    return(
<div class="container">

<a href="#" class="logo">
    <i class="fab fa-apple"></i>
</a>

    <div class="login-page-logo logo">
        <span class="p-1">N</span>
        <span class="p-2">G</span>
        <span>Neog</span><span>Cart</span>
    </div>



    <div class = "signup-page">
       
        <div class = "signup-page-content">
           
            <form class = "signup-page-form">
                <input type = "text"
                 class = "form-signup-input"
                 placeholder="Enter your Email"/>
                <input type = "password"
                 class = "form-signup-input"/>
                <a href = "#" class = "form-login-link">
                    Already have an account?
                </a>
                <input type = "button" class = "form-signup-btn signup"
                        value = "Sign Up"/>

            </form>
        </div>
     </div></div>
     );
}

export {Register};
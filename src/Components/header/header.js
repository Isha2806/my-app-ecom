import "./header.css" ;
import { Link } from "react-router-dom";
import { Logo} from "../../Components/logo/Logo";


const Header = ()=> {  
    return(
        <div>
        
     <h1 class = "top-nav">
     <Logo/>
        <Link to ="/cart" > Cart 👜</Link>
        <Link to = "/WishList"> Wishes💝 </Link>
        <Link to ="/" > Home 🎪</Link>
        <Link to = "/products">📌</Link>
       
    </h1>
    </div>


    );
}

export { Header} ;
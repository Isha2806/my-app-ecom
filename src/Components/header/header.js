import "./header.css" ;
import { Link } from "react-router-dom";
import { Logo} from "../../Components/logo/Logo";


const Header = ()=> {  
    return(
        <div>
        
     <h1 class = "top-nav">
     <Logo/>
        <Link to ="/cart" > Cart π</Link>
        <Link to = "/WishList"> Wishesπ </Link>
        <Link to ="/" > Home πͺ</Link>
        <Link to = "/products">π</Link>
       
    </h1>
    </div>


    );
}

export { Header} ;
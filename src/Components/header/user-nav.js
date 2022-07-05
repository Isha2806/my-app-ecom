import "./nav.css" ;
import { Link } from "react-router-dom";
import { Logo} from "../../Components/logo/Logo";

const Usernav = ()=> {  
    return(
  
     <h1 class = "top-nav">
        <Link to = "/signup">Login to Explore More!</Link>
     </h1>
     

    );
}

export { Usernav} ;
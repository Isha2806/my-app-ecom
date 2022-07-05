import "./indexhomestyle.css";
import airpod from "../../assets/Icons/airpods-icon.png";
import home from "../../assets/Icons/home-icon.png";
import iphone from "../../assets/Icons/iphone-icon.png";
import mac from "../../assets/Icons/macbook-icon.png";
import watch from "../../assets/Icons/watch-icon.png";
import MacScreen from "../../assets/MacBook/iphone.png";
import MacKeyBoard from "../../assets/MacBook/section-1-bg-4.jpg";
import { Link } from "react-router-dom";
import { Logo } from "../../Components/logo/Logo";
import { Usernav } from "../header/user-nav";


const Indexhome = ()=> {  
    return(
        <div class="container">
            <section class="section-6 center">
                <Usernav/>
                <div class="section-6-icons">
                    <Link to = "/products" class="icon-link"> <img src={home}/></Link>
                    <Link to = "/products" class="icon-link"><img src={iphone}/></Link>
                    <Link to = "/products"class="icon-link"><img src={airpod}/></Link>
                    <Link to = "/products" class="icon-link"><img src={mac}/></Link>
                    <Link to = "/products"class="icon-link"><img src={watch}/></Link>
                </div>
            </section>
            <section class="section-1" id="section-1">
                <a href="#" class="logo">
                <Logo/><i class="fab fa-apple"></i></a>
                    <nav class="navbar">
                        <Link to="/products" className="navbar-link"> Click Me to Get Special Discounts On Latest Products !</Link>
                    </nav>
                <div class="section-1-banner center"><h1>&#8592; For You</h1>
                 <p>"A Free Gift On Every Click !" </p>
                 <span> - From Shavi The UI</span>
                 <Link to="/products" >
                    <button type="button">Explore Products</button></Link>
                </div>
                </section>
            <section class="section-2" id="section-2">
                <h1 class="section-2-heading">For Neograds'21</h1>
                <div class="iphones">
                    <img src = {MacScreen}   class="iphone-img-1"/>
                    <img src={MacKeyBoard}class="iphone-img-2"/>
                </div>
                <div class="iphone-btns">
                    <Link to = "/cart" class="iphone-btn center"><span>Buy Me</span></Link>
                    <Link to ="/products" class="iphone-btn center"><span>Explore</span></Link>
                </div>
            </section>
        </div>
 );
}

export {Indexhome};
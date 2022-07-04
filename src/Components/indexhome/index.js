import "./indexhomestyle.css";
const Indexhome = ()=> {  
    return(
<div class="container">
       
<section class="section-1" id="section-1">

    <a href="#" class="logo">
        <i class="fab fa-apple"></i>
    </a>
    <div class="login-page-logo logo">
        <span class="p-1">N</span>
        <span class="p-2">G</span>
        <span>Neog</span><span>Cart</span>
    </div>
   
    <nav class="navbar">
        <a href="/Home/home.html" class="navbar-link">home</a>
        <a href="/Login/login.html" class="navbar-link">login</a>
        <a href="/Signup/signup.html" class="navbar-link">Signup</a>
        <a href="/Product/product.html" class="navbar-link">Products</a>         
        <a href="/Wishlist/wishlist.html" class="navbar-link">WishList</a>
        <a href="/Cart/cart.html" class="navbar-link">My Cart</a>                
    </nav>
   
    <div class="cube-wrapper">
        <div class="cube">
            <div class="front-side">
                <img src="images/iphone.png"/>
            </div>
            <div class="back-side center">
                <i class="fab fa-apple"></i>
            </div>
        </div>

      
        <div class="controls">
            <a href="#" class="top-x-control">
                <i class="fas fa-arrow-up "></i>
            </a>
            <a href="#" class="bottom-x-control">
                <i class="fas fa-arrow-down "></i>
            </a>
            <a href="#" class="left-y-control">
                <i class="fas fa-arrow-left "></i>
            </a>
            <a href="#" class="right-y-control">
                <i class="fas fa-arrow-right "></i>
            </a>
            <a href="#" class="top-z-control">
                <i class="fas fa-arrow-down "></i>
            </a>
            <a href="#" class="bottom-z-control">
                <i class="fas fa-arrow-up "></i>
            </a>
        </div>

    </div>
  
    <div class="section-1-banner center">
        <h1>&#8592; Neog</h1>
        

        <p>"A Gift Cart for Neog team!"</p>
        <span> - From neogrammers</span>
        <a href = "/Home/home.html">
            <button type="button">Claim Now</button>
            </a>
    </div>
    
    <div class="slideshow"></div>
   
</section>

<section class="section-2" id="section-2">
 
    <h1 class="section-2-heading">For Neograds'21</h1>
    
    <div class="iphones">
        <img src="images/iPhones/iphones-1-img.png" class="iphone-img-1"/>
        <img src="images/iPhones/iphones-2-img.png" class="iphone-img-2"/>
    </div>
   
    <div class="iphone-btns">
        <a href="#" class="iphone-btn center"><span>Learn More</span></a>
        <a href="#" class="iphone-btn center"><span>Claim</span></a>
    </div>
   
</section>

<section class="section-3 center" id="section-3">
   
    <h1 class="section-3-heading">Neo-Team</h1>
   
    <div class="section-3-content center">
       
        <img src="images/MacBook/macbook-screen.png" class="macbook-img-1"/>
        <img src="images/MacBook/macbook-keyboard.png" class="macbook-img-2"/>
        
        <div class="loading-wrapper">
            <div class="loading center">
                <i class="fab fa-apple"></i>
                <div class="progress-bar"></div>
            </div>
        </div>
       
        <div class="macbook-info">
            <h2 class="macbook-info-heading">Special Rewards</h2>
            <p class="macbook-price">Starting with Tanvi</p>
            <button class="macbook-btn">Claim Now</button>
        </div>
      
    </div>
   
</section>

<section class="section-4 center" id="section-4">
   
    <div class="watches center">
       
        <div class="watch-bands center">
            <img src="images/watches/watch-band-1.jpg" class="watch-band-img"/>
            <img src="images/watches/watch-band-2.jpg" class="watch-band-img"/>
            <img src="images/watches/watch-band-3.jpg" class="watch-band-img"/>
            <img src="images/watches/watch-band-4.jpg" class="watch-band-img"/>
            <img src="images/watches/watch-band-5.jpg" class="watch-band-img"/>
            <img src="images/watches/watch-band-6.jpg" class="watch-band-img"/>
            <img src="images/watches/watch-band-7.jpg" class="watch-band-img"/>
            <img src="images/watches/watch-band-8.jpg" class="watch-band-img"/>
            <img src="images/watches/watch-band-9.jpg" class="watch-band-img"/>
        </div>
       
        <div class="watch-cases center">
            <img src="images/watches/watch-case-1.png" class="watch-case-img"/>
            <img src="images/watches/watch-case-2.png" class="watch-case-img"/>
            <img src="images/watches/watch-case-3.png" class="watch-case-img"/>
            <img src="images/watches/watch-case-4.png" class="watch-case-img"/>
            <img src="images/watches/watch-case-5.png" class="watch-case-img"/>
            <img src="images/watches/watch-case-6.png" class="watch-case-img"/>
            <img src="images/watches/watch-case-7.png" class="watch-case-img"/>
            <img src="images/watches/watch-case-8.png" class="watch-case-img"/>
            <img src="images/watches/watch-case-9.png" class="watch-case-img"/>
        </div>
      
    </div>
   
    <a href="#" class="watch-control watch-top-control center">
        <i class="fas fa-angle-up"></i>
    </a>
    <a href="#" class="watch-control watch-right-control center">
        <i class="fas fa-angle-right"></i>
    </a>
    <a href="#" class="watch-control watch-bottom-control center">
        <i class="fas fa-angle-down"></i>
    </a>
    <a href="#" class="watch-control watch-left-control center">
        <i class="fas fa-angle-left"></i>
    </a>
    
    <button class="watch-btn">Claim Now</button>
    
</section>

<section class="section-5 center" id="section-5">
    
    <div class="airpods">
        
        <h1 class="section-5-heading">AirPods</h1>
       
        <img src="images/AirPods/airpods-1.png" class="airpods-img-1"/>
        <img src="images/AirPods/airpods-2.png" class="airpods-img-2"/>
      
        <div class="airpods-buttons">
            <button class="airpods-btn">Learn More</button>
            <button class="airpods-btn">Claim</button>
        </div>
     
    </div>
  
</section>

<section class="section-6 center">
    <div class="section-6-icons">
        <a href="#section-1" class="icon-link">
            <img src="images/Icons/home-icon.png"/>
        </a>
        <a href="#section-2" class="icon-link">
            <img src="images/Icons/iphone-icon.png"/>
        </a>
        <a href="#section-3" class="icon-link">
            <img src="images/Icons/macbook-icon.png"/>
        </a>
        <a href="#section-4" class="icon-link">
            <img src="images/Icons/watch-icon.png"/>
        </a>
        <a href="#section-5" class="icon-link">
            <img src="images/Icons/airpods-icon.png"/>
        </a>
    </div>
    <p class="copyright">Made By &copy;Shavi_Gift_Cart with ❤</p>
</section>
</div>
 );
}

export {Indexhome};
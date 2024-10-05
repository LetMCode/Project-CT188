const body = document.querySelector('body')
const header = document.createElement('header')
function Header (){
    const html = `
    <div class="container">
            <div class="header">
                <a href="/" class="logo-link">
                    <img src="../../assets/images/HomeIMG/logo.png" alt="" class="logo-pages">
                </a>
                <ul class="list-pages">
                    <li class="item-page">
                        <a href="../Intro/index.html" class="item-label">About Us</a>
                    </li>
                    <li class="item-page">
                        <a href="../Product/index.html" class="item-label">Product</a>
                    </li>
                    <li class="item-page">
                        <a href="../Blogs/index.html" class="item-label">Blogs</a>
                    </li>
                    <li class="item-page">
                        <a href="../Contact/index.html" class="item-label">Contact</a>
                    </li>
                </ul>
                <ul class="list-actions">
                    <li class="item-page__action">
                        <a href="../Cart/index.html" class="item-label">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </a>
                    </li>
                    <li class="item-page__action">
                        <a href="../SignUp/index.html" class="item-label">Sign In</a>
                    </li>
                    <li class="item-page__action btn__signUp">
                        <a href="../SignIn/index.html" class="item-label">Sign Up</a>
                    </li>
                </ul>
            </div>
        </div>
    `
    header.innerHTML = html
    return body.appendChild(header) 
}  

Header()
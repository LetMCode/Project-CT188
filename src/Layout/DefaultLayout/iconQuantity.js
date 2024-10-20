var cartUserAPI = "http://localhost:3000/cartUser"

function getCartAPI(callback){
    fetch(cartUserAPI)
        .then(response => response.json())
        .then(callback)
}

function handleIconQuantityCart() {
    var posIconCart = document.querySelector('.item-page__action-icon')
    const htmls = `
        <a href="../Cart/index.html" class="item-label icon-cart">
            <i class="fa-solid fa-cart-shopping"></i>
        </a>
        <span class="quantityIcon-header">${data.length}</span>
    `
    posIconCart.innerHTML = htmls
}

export function renderIconQuantityCart(){
    getCartAPI(handleIconQuantityCart)
}


var cartUserAPI = "http://localhost:3000/cartUser"
var IconCart = document.querySelector('.icon-cart')
var posIconCart = document.createElement('span')

function getCartAPI(callback){
    fetch(cartUserAPI)
        .then((response) => response.json())
        .then(callback)
}

function DeleteCart(data,callback){
    var options = {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    fetch(cartUserAPI + '/' + data,options)
        .then(function(response){
            return response.json()
        })
        .then(() =>{
            getCartAPI(renderCart)
            getCartAPI(renderIconQuantityCart)
        })
        .then(callback)
}

function renderIconQuantityCart (data){
    posIconCart.setAttribute('class','.item-page__action-icon')
    const htmls = `
        <span class="quantityIcon-header">${data.length}</span>
    `
    posIconCart.innerHTML = htmls
    IconCart.appendChild(posIconCart)
}

function renderCart(data){
    var listCart = document.querySelector('.list-item__cart')
    renderTotalPrice(data)
    if (data.length !== 0){
        const htmls = data.map((item)=>{
            return `
            <div class="item-cart" data-id="${item.id}">
            <img src="${item.img}" alt="" class="item-cart__img">
            <h4 class="item-cart__heading">${item.name}</h4>
            <h5 class="item-cart__code">${item.code}</h5>
            <p class="item-cart__size">Size: ${item.size}</p>
            <p class="item-cart__price">${item.price}</p>
            <button onclick="DeleteCart(${item.id})" class="btn-delete__cart" >&times Delete</button>
            </div>
            `
        })
        listCart.innerHTML = htmls.join('');
    }else{
        listCart.innerHTML = `
            <div class="textTemp-cart">Chưa có sản phẩm trong giỏ hàng</div>
        `
    }
}

function calPrice(data){
    let total = 0;
    data.map(item =>{
        total += parseInt((item.price.split(/[\.0VND]/)).join(''))
    })
    usingToPrintTotal = String(total)
    if(total >= 1000 && total < 10000){
        usingToPrintTotal = usingToPrintTotal.substring(0,1) + "." + usingToPrintTotal.substring(1) + ".000 VND"   
    }
    else if(total >= 10000 && total < 100000){
        usingToPrintTotal = usingToPrintTotal.substring(0,2) + "." + usingToPrintTotal.substring(2) + ".000 VND"   
    }
    else if(total >= 100000){
        usingToPrintTotal = usingToPrintTotal.substring(0,3) + "." + usingToPrintTotal.substring(3) + ".000 VND"   
    }
    else if (total === 0){
        usingToPrintTotal = "0 VND"
    }
    else{
        usingToPrintTotal = String(total)+".000 VND"
    }
    return usingToPrintTotal
}

function renderTotalPrice(data){
    var cardPayment = document.querySelector('.slide_payment')
    const total = calPrice(data)
    const html = `
       <div class="slider-payment-wrap">
            <h3 class="payment-heading">
                Thông tin đơn hàng
            </h3>
            <p class="payment-desc__temp">
                Tạm tính: ${total}
            </p>
            <p class="payment-desc__total">
                Tổng tính: ${total}
            </p>
            <p class="payment-desc__sub">
                Bạn có thể nhập mã giảm giá ở trang thanh toán
            </p>
            <button class="payment-btn__payed">
                Thanh toán
            </button>
       </div>
    `
    cardPayment.innerHTML = html
}

function start(){
    getCartAPI(renderCart)
    getCartAPI(renderIconQuantityCart)
}

start()
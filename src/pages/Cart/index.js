var cartUserAPI = "http://localhost:3000/cartUser"

function getCartAPI(callback){
    fetch(cartUserAPI)
        .then((response) => response.json())
        .then(callback)
}

function handleDeleteCart(data){
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
        .then(callback)
}

function renderCart(data){
    var listCart = document.querySelector('.list-item__cart')
    if (data.length !== 0){
        const htmls = data.map((item)=>{
            return `
            <div class="item-cart" data-id="${item.id}">
            <img src="${item.img}" alt="" class="item-cart__img">
            <h4 class="item-cart__heading">${item.name}</h4>
            <h5 class="item-cart__code">${item.code}</h5>
            <p class="item-cart__price">${item.price}</p>
            <button onclick="handleDeleteCart(${item.id})" class="btn-delete__cart" >&times Delete</button>
            </div>
            `
        })
        listCart.innerHTML = htmls.join('');
    }
}

function calPrice(data){
    let total = 0;
    data.map(item =>{
        total += parseInt((item.price.split(/[\.0VND]/)).join(''))
    })
    usingToPrintTotal = String(total)
    if(total >= 1000){
        usingToPrintTotal = usingToPrintTotal.substring(0,1) + "." + usingToPrintTotal.substring(1) + ".000 VND"   
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
    getCartAPI(renderTotalPrice)
}

start()
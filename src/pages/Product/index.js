var shoesAPI = "http://localhost:3000/shoes";
var cartUserAPI = "http://localhost:3000/cartUser"
var list = document.querySelector(".list-item");
var IconCart = document.querySelector('.icon-cart')
var posIconCart = document.createElement('span')
var toastMsg = document.querySelector('.toastMsg-wrap')
function getItem(data,callback){
    var options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
          },
    }
    fetch(shoesAPI + '/' + data,options)
        .then(function(response){
            return response.json()
        })
        .then(callback)
}

function addItem(data,callback){
    var options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    
    fetch(cartUserAPI,options)
        .then(function(response){
            return response.json()
        })
        .then(callback)
}

function handleOther (data){
    addItem(data)
    app.getCartAPI(app.renderIconQuantityCart)
    
    
}

function toastMessage(){
    const htmls = `
        <span class="toastMsg__icon-wrap"> <i class="fa-solid fa-circle-check toastMsg__icon"></i></span>
        <h4 class="toastMsg__heading">
            Đã thêm sản phẩm vào giỏ hàng
        </h4>
    `
    contentToastMsg = document.createElement("div")
    contentToastMsg.setAttribute('class','toastMsg')
    contentToastMsg.innerHTML = htmls
    var btnOther = document.querySelectorAll('.item-product__other-btn')
    for (let btn of btnOther) {
    btn.onclick =  (e)=> {
        toastMsg.appendChild(contentToastMsg)
        contentToastMsg.style.animation = `slideInLeft ease .3s, fadeOut linear 1s 2s forwards`
        setTimeout(function () {
            toastMsg.removeChild(contentToastMsg);
        }, 3000)
    }
    }

   
}


const app = {
    getProductAPI: function (callback) {
        fetch(shoesAPI)
            .then((response) => response.json())
            .then(callback);
    },
    getCartAPI: function (callback) {
        fetch(cartUserAPI)
            .then((response) => response.json())
            .then(callback);
    },
    renderProductAPI: function (ListOfAPI) {
        const html = ListOfAPI.map((item) => {
            return `
                <div data-id="${item.id}" class="item-product">
                    <img src="${item.img}" alt="" class="item-product__img">
                    <h4 class="item-product__heading">
                        ${item.name}
                    </h4>
                    <h5 class="item-product__code">
                        ${item.code}
                    </h5>
                    <p class="item-product__author">
                        Hãng: ${item.author}
                    </p>
                    <p onclick="click(e)" class="item-product__price">
                        Price: ${item.price}
                    </p>
                    <button onclick ="getItem(${item.id},handleOther)" class="item-product__other-btn">
                        Other
                    </button>
                </div>
                `;
        });
        list.innerHTML = html.join("");
    },
    renderIconQuantityCart: function(data){
        posIconCart.setAttribute('class','.item-page__action-icon')
        const htmls = `
            <span class="quantityIcon-header">${data.length}</span>
        `
        posIconCart.innerHTML = htmls
        IconCart.appendChild(posIconCart)
        toastMessage()
    },
    
    start: function () {
        this.getCartAPI(this.renderIconQuantityCart)
        this.getProductAPI(this.renderProductAPI);
    },
};

app.start();

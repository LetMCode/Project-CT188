var shoesAPI = "http://localhost:3000/shoes";
var cartUserAPI = "http://localhost:3000/cartUser"
var list = document.querySelector(".list-item");


function handleGetItem(data,callback){
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

function addOtherItem(data,callback){
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

function handleOther(data){
    addOtherItem(data)
}
const app = {
    getProductAPI: function (callback) {
        fetch(shoesAPI)
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
                    <p class="item-product__price">
                        Price: ${item.price}
                    </p>
                    <button onclick ="handleGetItem(${item.id},handleOther)" class="item-product__other-btn">
                        Other
                    </button>
                </div>
                `;
        });
        list.innerHTML = html.join("");
    },
    
    start: function () {
        this.getProductAPI(this.renderProductAPI);
    },
};

app.start();

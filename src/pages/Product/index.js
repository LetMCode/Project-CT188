var shoesAPI = "http://localhost:3000/shoes";
var list = document.querySelector('.list-item')
fetch(shoesAPI)
    .then((reponse) => reponse.json())
    .then((shoes) => {
        const html = shoes.map((item)=>{
            return `
                <div class="item-product">
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
                    <button class="item-product__other-btn">
                        Other
                    </button>
                </div>
            `
        })
        list.innerHTML = html.join('')
        console.log(list)
    })
    .catch(console.log("invalid API"));

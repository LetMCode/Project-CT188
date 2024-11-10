var body = document.querySelector("body");
const header = document.createElement("header");
var footer = document.createElement("footer");
var posIconCart = document.createElement("span");
var slides = document.querySelector(".slides");
var slideImages = document.querySelectorAll(".slide");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var posIconCart = document.createElement("span");
var list = document.querySelector(".list-item");
var toastMsg = document.querySelector(".toastMsg-wrap");
var totalSlides = slideImages.length;
// Host API
var shoesAPI = "https://hostapi-g350.onrender.com/api/product";
var cartUserAPI = "https://hostapi-g350.onrender.com/api/cartUser";

// Host Local
// var shoesAPI = "http://localhost:3000/product";
// var cartUserAPI = "http://localhost:3000/cartUser";

let currentIndex = 0;

const handleHeader = {
    renderHeader: function () {
        const html = `
        <div class="container">
                <div class="header-wrap">
                    <span class="icon-menu__header">
                        <i class="fa-solid fa-bars"></i>
                    </span>
                    <a href="../../../index.html" class="logo-link">
                        <img src="../../assets/images/HomeIMG/logo1.png"/ alt="" class="logo-pages">
                    </a>
                    <ul class="list-pages ">
                        <li class="item-page item-page__home">
                            <a href="../../../index.html" class="item-label">Home</a>
                        </li>
                        <li class="item-page">
                            <a href="../Intro/index.html" class="item-label">Giới thiệu</a>
                        </li>
                        <li class="item-page">
                            <a href="../Product/index.html" class="item-label">Sản phẩm</a>
                        </li>
                        <li class="item-page">
                            <a href="../Blogs/index.html" class="item-label">Blogs</a>
                        </li>
                        <li class="item-page">
                            <a href="../Contact/index.html" class="item-label">Liên hệ</a>
                        </li>
                        <li class="item-page item-page__policies">
                            <a href="../Policies/index.html" class="item-label">Chính Sách</a>
                        </li>
                    </ul>
                    <ul class="list-actions">
                        <li class="item-page__action item-page__action-icon">
                        <a href="../Cart/index.html" class=" icon-cart">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </a>
                        </li>
                        <li class="item-page__action item-page__action-fragment ">
                            <span class="icon-action__wrap">
                                <i class="fa-solid fa-user"></i>
                            </span>
                            <div class="item-page__action-wrap">
                                
                                <div class="item-page__action__sign-in">
                                    <a href="../SignIn/index.html" >Đăng nhập</a>
                                </div>
                                <a class="item-page__action__sign-up" href="../SignUp/index.html" >Đăng ký</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        `;
        header.innerHTML = html;
        return body.appendChild(header);
    },
    handleEventHeader: function () {
        var btnMenu = document.querySelector(".icon-menu__header");
        var listPage = document.querySelector(".list-pages");
        var btnIconHeader = document.querySelector(".icon-action__wrap");
        var wrapSign = document.querySelector(".item-page__action-wrap");
        btnIconHeader.addEventListener("click", () => {
            if (wrapSign.classList.contains("icon-action__wrap__active")) {
                wrapSign.classList.remove("icon-action__wrap__active");
            } else {
                wrapSign.classList.add("icon-action__wrap__active");
            }
        });

        btnMenu.addEventListener("click", () => {
            if (listPage.classList.contains("list-pages__active")) {
                listPage.classList.remove("list-pages__active");
            } else {
                listPage.classList.add("list-pages__active");
            }
        });
    },
    start: function () {
        this.renderHeader();
        this.handleEventHeader();
    },
};

const handleFooter = {
    renderFooter: function () {
        const html = `
       <div class="container">
            <div class="footer">
                <ul class="list-footer">
                    <li class="item-footer item-footer__left">
                        <span>
                            Hotline: 0912528877<br/>
                            9:00 - 18:00, Thứ Hai đến Thứ Sáu<br/>
                            ballance&gara@gmail.com
                        </span>
                        <span>
                            <a href="#!">
                                <i class="icon-footer fa-brands fa-instagram"></i>
                            </a>
                            <a href="#!">
                                <i class="icon-footer fa-brands fa-square-facebook"></i>
                            </a>
                        </span>
                    </li>
                    <li class="item-footer item-footer__center">
                        <div class="item-footer__center-content">
                            <label class="item-footer__center-label">Sản phẩm</label>
                            <ul>
                                <li><a href="../Product/index.html" class="">Sản Phẩm mới</a></li>
                                <li><a href="../Product/index.html" class="">Sản phẩm nổi bật</a></li>
                                <li><a href="../Product/index.html" class="">Bộ sưu tập Air Force One</a></li>
                                <li><a href="../Product/index.html" class="">Thương hiệu nổi bật</a></li>
                                <li><a href="../Product/index.html" class="">Sản phẩm khuyến mãi</a></li>
                            </ul>
                        </div>
                        <div class="item-footer__center-content">
                            <label class="item-footer__center-label">Contract With Us</label>
                            <ul>
                                <li><a href="../Contact/index.html" class="">Đặt hàng số lượng lớn</a></li>
                                <li><a href="../Contact/index.html" class="">Khách hàng doanh nghiệp</a></li>
                                <li><a href="../Contact/index.html" class="">Hợp tác phối hợp</a></li>
                                <li><a href="../Contact/index.html" class="">Hợp tác doanh nghiệp</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="item-footer">
                        <p class="item-footer__desc">
                            Hợp tác doanh nghiệp<br/>
                            CÔNG TY TNHH Balance & Gara<br/>
                            Khu II, Đ. 3 Tháng 2, Xuân Khánh, Ninh Kiều,<br/>
                            Thành phố  Cần Thơ, Việt Nam<br/>
                            MST: 0317645769<br/>
                            Giấy phép ĐKKD số 0317645769<br/>
                            cấp ngày 12 tháng 01 năm 2023<br/>
                        </p>
                        <img src="../../assets/images/HomeIMG/logo_bct_hihi.webp" alt="" class="logo-footer">
                    </li>
                </ul>
                <div class="list-footer__bottom">
                    <div class="item-footer__bottom">
                        <p class="item-footer__bottom-desc">
                            copyright © 2024 • All Rights Reserved
                        </p>
                    </div>
                    <div class="item-footer__bottom-center">
                        <ul class="item-footer__bottom-list">
                            <li>
                                <a href="../Policies/index.html" class="item-footer__bottom-desc">
                                    Đổi trả
                                </a>
                            </li>
                            <li>
                                <a href="../Policies/index.html" class="item-footer__bottom-desc">
                                    chính sách thanh toán
                                </a>
                            </li>
                            <li>
                                <a href="../Policies/index.html" class="item-footer__bottom-desc">
                                    chính sách giao hàng
                                </a>
                            </li>
                            <li>
                                <a href="../Policies/index.html" class="item-footer__bottom-desc">
                                    hướng dẫn mua hàng
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="item-footer__bottom-right">
                        <ul class="item-footer__bottom-list">
                            <li>
                                <a href="../Policies/index.html" class="item-footer__bottom-desc">
                                    Điều Khoản Sử Dụng
                                </a>
                            </li>
                            <li>
                                <a href="../Policies/index.html" class="item-footer__bottom-desc">
                                    Chính Sách Bảo Mật
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
        footer.innerHTML = html;
        return body.appendChild(footer);
    },
    renderBtn: function () {
        const btnTurnBack = document.createElement("div");
        body.setAttribute("id", "body");
        const htmls = `
            <a href="#body" class="btn__turn-back">
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </a>
        `;
        btnTurnBack.innerHTML = htmls;
        return body.appendChild(btnTurnBack);
    },
    start: function () {
        this.renderFooter();
        this.renderBtn();
    },
};

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
function nextSlide() {
    showSlide(currentIndex + 1);
}
function prevSlide() {
    showSlide(currentIndex - 1);
}
// Ảnh hàng
const HomePageJS = {
    handleEvent: function () {
        setInterval(nextSlide, 3500);
        document.querySelectorAll(".product-img img").forEach((img) => {
            const originalSrc = img.src;
            const hoverSrc = img.getAttribute("data-hover");
            img.addEventListener("mouseover", () => {
                img.src = hoverSrc;
            });
            img.addEventListener("mouseout", () => {
                img.src = originalSrc;
            });
        });

        document.querySelectorAll(".box-product .color-dot").forEach((dot) => {
            dot.addEventListener("click", () => {
                const newSrc = dot.getAttribute("data-img-src");
                dot.closest(".box-product")
                    .querySelectorAll(".product-img img")
                    .forEach((img) => {
                        img.src = newSrc;
                    });
            });
        });
        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click", prevSlide);
    },
};

// Đổi ảnh khi click vào các chấm màu

// DANH
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    var selectorRules = {};
    // Hàm thực hiên validate
    function validate(inputElement, rule) {
        var errorElement = getParent(
            inputElement,
            options.formGroupSelector
        ).querySelector(options.errorSelector);
        var errorMessage;
        //test func: rule.test      // value : inputElement.value //input ng dùng nhập vào
        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rule và kiểm tra
        // nếu có lỗi dừng kt
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case "radio":
                case "checkbox":
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ":checked")
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }

            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add(
                "invalid"
            );
        } else {
            errorElement.innerText = "";
            getParent(inputElement, options.formGroupSelector).classList.remove(
                "invalid"
            );
        }
        return !errorMessage;
    }
    //----------------------------------

    // lấy element của form cần validte
    var formElement = document.querySelector(options.form);
    if (formElement) {
        //khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rule và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                //Trường hợp submit với js
                if (typeof options.onSubmit === "function") {
                    var enableInputs = formElement.querySelectorAll("[name]");
                    var formValues = Array.from(enableInputs).reduce(function (
                        values,
                        input
                    ) {
                        switch (input.type) {
                            case "radio":
                            case "checkbox":
                                values[input.name] = formElement.querySelector(
                                    'input[name="' + input.name + '"]:checked'
                                ).value;

                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    },
                    {});
                    options.onSubmit(formValues);
                }
                // trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            }
        };

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiên blur, input,..)
        options.rules.forEach(function (rule) {
            //vòng lặp

            //Lưu lại các rules cho mỗi input

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
                // xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule); //---
                };

                // xử lý mỗi khi ng dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(
                        inputElement,
                        options.formGroupSelector
                    ).querySelector(options.errorSelector); //span
                    errorElement.innerText = "";
                    getParent(
                        inputElement,
                        options.formGroupSelector
                    ).classList.remove("invalid");
                };
            });
        });
    }
    //----------------------------------
}

//---Định nghĩa các rules---
// nguyen tac của các rules:
// 1. khi lỗi => trả ra message lỗi
// 2. khi hợp lệ => ko trả ra j cả (undefined)
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || "Vui lòng nhập trường này";
        },
    };
};
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var phone = /0\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) || phone.test(value)
                ? undefined
                : message || "trường này phải là email or sdt";
        },
    };
};
Validator.isPhone = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var phone = /0\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
            return phone.test(value)
                ? undefined
                : message || "trường này phải là email or sdt";
        },
    };
};
Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min
                ? undefined
                : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        },
    };
};
Validator.isConfirm = function (selector, getconfirm, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getconfirm()
                ? undefined
                : message || "Giá trị nhập vào không chính xác";
        },
    };
};
//----------------//
//Contact
const ContactJS = {
    checkFormContact: function () {
        const mainmodal = document.querySelector(".main-modal");
        const closeBtn= document.querySelector(".btn button");
        mainmodal.classList.add("active");
        mainmodal.style.opacity = "1";

        closeBtn.addEventListener("click", () => {
            mainmodal.style.opacity = "0";
            setTimeout(() => {
                mainmodal.classList.remove("contact-active");
            }, 300);
        });
    },
};

// ---------------//
// ProductPage & CartPage

function getItem(id, data, callback) {
    var options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(shoesAPI, options)
        .then(function (response) {
            return response.json();
        })
        .then((product) => product[id].page[data - 1])
        .then(callback);
}

function addItem(data, callback) {
    var options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };

    fetch(cartUserAPI, options)
        .then(function (response) {
            return response.json();
        })
        .then((data) => {
            console.log("Add Item", data);
            toastMessage();
            ProductJS.getCartAPI(ProductJS.renderIconQuantityCart);
        })
        .then(callback);
}
function DeleteItem(data, callback) {
    var options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(cartUserAPI + "/" + data, options)
        .then(function (response) {
            return response.json();
        })
        .then((data) => {
            console.log("Delete: ", data);
            CartPageJS.start();
        })
        .then(callback);
}
function handleOther(data) {
    addItem(data);
}

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
function handleDeleteItem(data) {
    // DeleteItem(data.id);
    debounce(DeleteItem(data.id), 300);
}

// Sử dụng debounce cho thao tác xóa để tránh gửi quá nhiều yêu cầu

function toastMessage() {
    const contentToastMsg = document.querySelector(".toastMsg");
    const duration = 3000;
    const delay = (duration / 1000).toFixed(2);
    const htmls = `
        <span class="toastMsg__icon-wrap"> <i class="fa-solid fa-circle-check toastMsg__icon"></i></span>
        <h4 class="toastMsg__heading">
            Đã thêm sản phẩm vào giỏ hàng
        </h4>
    `;
    contentToastMsg.innerHTML = htmls;
    const autoRemoveId = setTimeout(function () {
        toastMsg.removeChild(contentToastMsg);
    }, duration + 1000);
    toastMsg.appendChild(contentToastMsg);
    toastMsg.classList.add("active");
    contentToastMsg.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
    clearTimeout(autoRemoveId);
}

function calPrice(data) {
    let total = 0;
    data.map((item) => {
        total += parseInt(item.price.split(/\.|000VND/).join(""));
    });
    usingToPrintTotal = String(total);
    if (total >= 1000 && total < 10000) {
        usingToPrintTotal =
            usingToPrintTotal.substring(0, 1) +
            "." +
            usingToPrintTotal.substring(1) +
            ".000 VND";
    } else if (total >= 10000 && total < 100000) {
        usingToPrintTotal =
            usingToPrintTotal.substring(0, 2) +
            "." +
            usingToPrintTotal.substring(2) +
            ".000 VND";
    } else if (total >= 100000) {
        usingToPrintTotal =
            usingToPrintTotal.substring(0, 3) +
            "." +
            usingToPrintTotal.substring(3) +
            ".000 VND";
    } else if (total === 0) {
        usingToPrintTotal = "0 VND";
    } else {
        usingToPrintTotal = String(total) + ".000 VND";
    }
    return usingToPrintTotal;
}

const ProductJS = {
    getProductAPI: function (callback, id) {
        console.log(shoesAPI);
        fetch(shoesAPI)
            .then((response) => response.json())
            .then((data) => callback(data, id));
    },
    getCartAPI: function (callback) {
        fetch(cartUserAPI)
            .then((response) => response.json())
            .then(callback);
    },
    renderProductAPI: function (ListOfAPI, id) {
        const html = ListOfAPI[id].page.map((item) => {
            return `
                <div data-id="${item.id}" class="item-product">
                    <a href="#!"><img src="${item.img}" alt="" class="item-product__img"></a>
                    <div class="item-product__wrap">
                        <h4 class="item-product__heading">
                            ${item.name}
                        </h4>
                        <h5 class="item-product__code">
                            ${item.code}
                        </h5>
                        <p class="item-product__author">
                            Hãng: ${item.author}
                        </p>
                        <p class="item-product__size">
                            Size: ${item.size}
                        </p>
                        <p onclick="click(e)" class="item-product__price">
                            Price: ${item.price}
                        </p>
                    </div>
                    <button onclick ="getItem(${id},${item.id},handleOther)" class="item-product__other-btn">
                        Đặt Hàng
                    </button>
                </div>
                `;
        });
        list.innerHTML = html.join("");
    },
    renderIconQuantityCart: function (data) {
        var IconCart = document.querySelector(".icon-cart");
        posIconCart.setAttribute("class", ".item-page__action-icon");
        const htmls = `
            <span class="quantityIcon-header">${data.length}</span>
        `;
        posIconCart.innerHTML = htmls;
        IconCart.appendChild(posIconCart);
    },
    renderIconQuantityCartForPages: function () {
        this.getCartAPI(this.renderIconQuantityCart);
    },
    start: function (id) {
        this.getProductAPI(this.renderProductAPI, id);
        this.getCartAPI(this.renderIconQuantityCart);
    },
};

const CartPageJS = {
    getCartAPI: function (callback) {
        fetch(cartUserAPI)
            .then((response) => response.json())
            .then(callback);
    },
    renderTotalPrice: function (data) {
        var cardPayment = document.querySelector(".slide_payment");
        const total = calPrice(data);
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
      `;
        cardPayment.innerHTML = html;
    },
    renderIconQuantityCart: function (data) {
        var IconCart = document.querySelector(".icon-cart");
        posIconCart.setAttribute("class", ".item-page__action-icon");
        const htmls = `
          <span class="quantityIcon-header">${data.length}</span>
        `;
        posIconCart.innerHTML = htmls;
        IconCart.appendChild(posIconCart);
    },
    renderCart: function (data) {
        var listCart = document.querySelector(".list-item__cart");
        if (data.length !== 0) {
            const htmls = data.map((item) => {
                return `
          <div class="item-cart" data-id="${item.id}">
            <img src="${item.img}" alt="" class="item-cart__img">
            <div class="item-cart__info col-lg-8">
                <h4 class="item-cart__heading">${item.name}</h4>
                <h5 class="item-cart__code">${item.code}</h5>
                <p class="item-cart__size">Size: ${item.size}</p>
                <p class="item-cart__price">${item.price}</p>
            </div>
            <button onclick="getItem(0,${item.id},handleDeleteItem)" class="btn-delete__cart" >&times</button>
          </div>
          `;
            });
            listCart.innerHTML = htmls.join("");
        } else {
            listCart.innerHTML = `
          <div class="textTemp-cart">Chưa có sản phẩm trong giỏ hàng</div>
      `;
        }
    },

    start: function () {
        this.getCartAPI(this.renderCart);
        this.getCartAPI(this.renderIconQuantityCart);
        this.getCartAPI(this.renderTotalPrice);
    },
};

const footer = document.createElement('footer')
function Footer (){
    const html = `
       <div class="container">
            <div class="footer">
                <ul class="list-footer">
                    <li class="item-footer item-footer__left">
                        <span>
                            Hotline:<br/>
                            9:00-18:00, Thứ Hai đến Thứ Sáu<br/>
                            Email@
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
                            <ul>
                                <a href="#!" class="">Đặt hàng số lượng lớn</a>
                                <a href="#!" class="">Khách hàng doanh nghiệp</a>
                            </ul>
                        </div>
                        <div class="item-footer__center-content">
                            <ul>
                                <a href="#!" class="">Hợp tác phối hợp</a>
                                <a href="#!" class="">Hợp tác doanh nghiệp</a>
                            </ul>
                        </div>
                    </li>
                    <li class="item-footer">
                        <p class="item-footer__desc">
                            Hợp tác doanh nghiệp<br/>
                            CÔNG TY TNHH Tarmor<br/>
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
                                <a href="#!" class="item-footer__bottom-desc">
                                    Đổi trả
                                </a>
                            </li>
                            <li>
                                <a href="#!" class="item-footer__bottom-desc">
                                    chính sách thanh toán
                                </a>
                            </li>
                            <li>
                                <a href="#!" class="item-footer__bottom-desc">
                                    chính sách giao hàng
                                </a>
                            </li>
                            <li>
                                <a href="#!" class="item-footer__bottom-desc">
                                    hướng dẫn mua hàng
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="item-footer__bottom-right">
                        <ul class="item-footer__bottom-list">
                            <li>
                                <a href="#!" class="item-footer__bottom-desc">
                                    Điều Khoản Sử Dụng
                                </a>
                            </li>
                            <li>
                                <a href="#!" class="item-footer__bottom-desc">
                                    Chính Sách Bảo Mật
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
    footer.innerHTML = html
    return body.appendChild(footer) 
}  

Footer()
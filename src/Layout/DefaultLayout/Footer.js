const footer = document.createElement('footer')
function Footer (){
    const html = `
     <div class="container">
            <div class="footer">
                <ul class="list-footer">
                    <li class="item-footer">
                        <span>
                            Hotline:
                            9:00-18:00, Thứ Hai đến Thứ Sáu
                            Email@
                        </span>
                        <span>
                            <a href="/">
                                <i class="icon-footer fa-brands fa-instagram"></i>
                            </a>
                            <a href="/">
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
                            Hợp tác doanh nghiệp
                            CÔNG TY TNHH MỘT ĐÔI GIÀY
                            35A Bàu Cát 1, Phường 14, Quận Tân Bình,
                            Thành phố Hồ Chí Minh, Việt Nam
                            MST: 0317645769
                            Giấy phép ĐKKD số 0317645769
                            cấp ngày 12 tháng 01 năm 2023
                        </p>
                        <img src="../../assets/images/HomeIMG/logo_bct_hihi.webp" alt="" class="logo-footer">
                    </li>
                </ul>
            </div>
        </div>
    `
    footer.innerHTML = html
    return body.appendChild(footer) 
}  

Footer()
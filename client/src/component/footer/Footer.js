import React from 'react';
import {useLocation} from 'react-router-dom';
function Footer(){
    let location= useLocation();
    if (location.pathname.includes("error")){
        return "";
    }
    return(
        <div className="footer">
            <div className="shel-des">
                <h6>ShelMark - MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN</h6>
                Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì ShelMark.vn là một sự lựa chọn hiệu quả dành cho bạn. Bản chất của ShelMark là một social ecommerce platform - nền tảng trang web thương mại điện tử tích hợp mạng xã hội. Điều này cho phép người mua và người bán hàng dễ dàng tương tác, trao đổi thông tin về sản phẩm và chương trình khuyến mãi của shop. Nhờ nền tảng đó, việc mua bán trên ShelMark trở nên nhanh chóng và đơn giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi trực tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua những dòng sản phẩm chính hãng, uy tín, ShelMark chính là sự lựa chọn lí tưởng dành cho bạn. Đến với ShelMark, cơ hội để trở thành một nhà bán hàng dễ dàng hơn bao giờ hết. Chỉ với vài thao tác trên ứng dụng, bạn đã có thể đăng bán ngay những sản phẩm của mình. Không những thế, các nhà bán hàng có thể tùy chọn các tính năng “Shop tạm nghỉ” hoặc tự tạo riêng cho mình một chương trình khuyến mãi để thu hút người mua với những sản phẩm có mức giá hấp dẫn. Khi đăng nhập tại ShelMark Kênh người bán, bạn có thể dễ dàng phân loại sản phẩm, theo dõi đơn hàng, chăm sóc khách hàng và cập nhập ngay các hoạt động của shop.
            </div>
            <hr/>
        </div>
    )
}
export default Footer;
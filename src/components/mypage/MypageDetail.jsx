import { MypageDetailStyle } from './style';

const MypageDetail = () => {
    return (
        <MypageDetailStyle>
            <ul className="wrap">
                <li>
                    <img src="./images/Mypage_Icon_order.png" alt="" />
                    <strong>ORDER</strong>
                    <span>주문내역 조회</span>
                </li>
                <li>
                    <img src="./images/Mypage_Icon_my.png" alt="" />
                    <strong>PROFILE</strong>
                    <span>회원정보</span>
                </li>
                <li>
                    <img src="./images/Mypage_Icon_coupon.png" alt="" />
                    <strong>COUPON</strong>
                    <span>쿠폰</span>
                </li>
                <li>
                    <img src="./images/Mypage_Icon_board.png" alt="" />y<strong>BOARD</strong>
                    <span>게시물 관리</span>
                </li>
                <li>
                    <img src="./images/Mypage_Icon_address.png" alt="" />
                    <strong>ADDRESS</strong>
                    <span>배송 주소록 관리</span>
                </li>
            </ul>
        </MypageDetailStyle>
    );
};

export default MypageDetail;

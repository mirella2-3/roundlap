import { Link } from 'react-router-dom';
import { FooterStyle } from './style';

const Footer = () => {
    return (
        <FooterStyle>
            <div className="inner">
                <ul>
                    <li className="left">
                        <ul>
                            <li>
                                <h1>
                                    <Link to="/">
                                        <img src="./images/Logo_Blue.png" alt="" />
                                    </Link>
                                </h1>
                            </li>
                            <li>
                                <ul>
                                    <li>이용약관</li>
                                    <li>개인정보취급방침</li>
                                    <li>이용안내</li>
                                    <li>서비스가입사실확인</li>
                                </ul>
                            </li>
                            <li>
                                고객님은 안전거래를 위해 결제시 저희 쇼핑몰에서 가입한 구매안전
                                서비스를 이용하실 수 있습니다.
                            </li>
                            <li>
                                <img src="./images/footer_logo1.png" alt="" />
                                <img src="./images/footer_logo2.png" alt="" />
                            </li>
                        </ul>
                    </li>
                    <li className="center">
                        <ul>
                            <li>
                                <h3>COMPANY</h3>
                            </li>
                            <li>
                                <ul>
                                    <li>
                                        <strong>상호</strong> span서린컴퍼니(주)
                                    </li>
                                    <li>
                                        <strong>대표</strong> 정서린ㆍ이영학
                                    </li>
                                    <li>
                                        <strong>사업자등록번호</strong> 843-88-00934
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>통신판매업 신고 </li>
                                    <li>2016-강원춘천-0225호</li>
                                </ul>
                            </li>
                            <li>강원특별자치도 춘천시 동면 춘천순환로 361</li>
                        </ul>
                    </li>
                    <li className="right">
                        <ul>
                            <li>
                                <h3>CUSTOMER CENTER</h3>
                            </li>
                            <li>
                                <strong>070-7717-0675</strong>
                            </li>
                            <li>AM 10:00 - PM 5:00 (주말 및 공휴일 휴무)</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </FooterStyle>
    );
};

export default Footer;

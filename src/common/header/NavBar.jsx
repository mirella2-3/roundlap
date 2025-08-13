import { Link } from 'react-router-dom';
import { NavStyle } from './style';
import { BsCart2 } from 'react-icons/bs';
import { IoMdSearch } from 'react-icons/io';
import { GoPerson } from 'react-icons/go';
import { useState } from 'react';
import Cart from '../../components/cart/Cart';

const NavBar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const carts = []; // 장바구니 데이터 (props나 context로 연결 가능)

    const toggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };
    return (
        <>
            <NavStyle className="nav">
                <ul className="MainMenu">
                    <li>
                        <Link to="/shop">SHOP</Link>
                        <ul className="subMenu">
                            <li>
                                전제품
                                <ul className="subSubMenu">
                                    <li>
                                        <Link to="/shop">#ALL</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/best">#BEST</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/set">#SET</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/sale">#SALE</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                유형별
                                <ul className="subSubMenu">
                                    <li>
                                        <Link to="/shop/toner">토너/미스트</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/essence">에센스/앰플</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/lotion">로션/크림</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/cleansing">클렌징/스크럽</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/mask">마스크/팩</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/suncare">선케어</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                고민별
                                <ul className="subSubMenu">
                                    <li>
                                        <Link to="/shop/water">수분/보습</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/sensitive">민감/진정</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/vitamin">영양/보호</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/corneous">각질/결</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/sunblock">자외선차단</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                라인별
                                <ul className="subSubMenu">
                                    <li>
                                        <Link to="/shop/dokdo">1025 독도</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/jajack">자작나무 수분</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/somanu">소나무 진정 시카</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/yakkong">약콩 판테놀</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/man">포 맨</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/vita">비타 나이아신</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/baby">베이비</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/dongbaek">동백 탄력</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/event">EVENT</Link>
                    </li>

                    <li>
                        <Link to="/brand">BRAND</Link>
                        <ul className="subMenu">
                            <li>
                                <Link to="/brand">Brand Story</Link>
                            </li>
                            <li>
                                <Link to="/brand/productline">Product Line</Link>
                            </li>
                            <li>
                                <Link to="/brand/magazine">Magazine</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/notice">C/S CENTER</Link>
                        <ul className="subMenu">
                            <li>
                                <Link to="/notice">Notice</Link>
                            </li>
                            <li>
                                <Link to="/faq">FAQ</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="topMenu">
                    <li>
                        <ul className="login">
                            <li>
                                <Link to="/login/login">LOGIN</Link>
                                {/* <Link to="/">LOGOUT</Link> */}
                            </li>
                            <li>
                                <Link to="/login/join">JOIN</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/mypage">
                            <GoPerson className="person" />
                        </Link>
                    </li>
                    <li>
                        <ul className="cart" onClick={toggleCart}>
                            <li>
                                <BsCart2 className="cartIcon" o />
                            </li>

                            <li>
                                <p>0{/* {carts.length} */}</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className="search">
                            <li>Search</li>
                            <li>
                                <IoMdSearch />
                            </li>
                        </ul>
                    </li>
                </ul>
                {isCartOpen && <Cart onClose={toggleCart} carts={carts} />}
            </NavStyle>
        </>
    );
};

export default NavBar;

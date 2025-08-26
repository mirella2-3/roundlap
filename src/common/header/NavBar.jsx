import { Link } from 'react-router-dom';
import { NavStyle } from './style';
import { BsCart2 } from 'react-icons/bs';
import { IoMdSearch } from 'react-icons/io';
import { GoPerson } from 'react-icons/go';
import { useState } from 'react';
import Cart from '../../components/cart/Cart';
import Search from '../../components/search/Search';
import Login from '../../pages/login/Login';
import { useDispatch, useSelector } from 'react-redux';

import { authActions } from '../../store/modules/authSlice';

const NavBar = ({ isMain }) => {
    const dispatch = useDispatch();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const authed = useSelector((state) => state.auth.authed);
    const user = useSelector((state) => state.auth.user);

    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const [hoveredMenu, setHoveredMenu] = useState(null);
    const handleMouseEnter = (menu) => setHoveredMenu(menu);
    const handleMouseLeave = () => setHoveredMenu(null);

    const toggleCart = () => setIsCartOpen((prev) => !prev);
    const toggleSearch = () => setIsSearchOpen((prev) => !prev);
    const toggleLogin = () => setIsLoginOpen((prev) => !prev);

<<<<<<< HEAD
    const handleLoginClick = () => {
        if (authed) {
            dispatch(authActions.logout());
        } else {
            toggleLogin();
        }
    };
=======
    const { authed, user } = useSelector((state) => state.auth);
>>>>>>> 6735c7e912997e75e55851f896b944f336c8a761

    return (
        <>
            {/* 여기에서 isMain -> $isMain 으로 변경 */}
            <NavStyle className="nav" $isMain={isMain}>
                <ul className="MainMenu">
                    <li
                        className="shopMenu"
                        onMouseEnter={() => handleMouseEnter('shop')}
                        onMouseLeave={handleMouseLeave}
                    >
                        {hoveredMenu === 'shop' && <div className="navBg"></div>}
                        <Link to="/shop/all/ALL">SHOP</Link>
                        {hoveredMenu === 'shop' && (
                            <ul className="subMenu">
                                <li className="allMenu">
                                    전제품
                                    <ul className="subSubMenu">
                                        <li>
                                            <Link to="/shop/all/ALL">ALL</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/all/BEST">BEST</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/all/SET">SET</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/all/SALE">SALE</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="typeMenu">
                                    유형별
                                    <ul className="subSubMenu">
                                        <li>
                                            <Link to="/shop/type/toner">토너/미스트</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/type/essence">에센스/앰플</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/type/lotion">로션/크림</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/type/cleansing">클렌징/스크럽</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/type/mask">마스크/팩</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/type/suncare">선케어</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="concernMenu">
                                    고민별
                                    <ul className="subSubMenu">
                                        <li>
                                            <Link to="/shop/concern/water">수분/보습</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/concern/sensitive">민감/진정</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/concern/vitamin">영양/보호</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/concern/corneous">각질/결</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/concern/sunblock">자외선차단</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="lineMenu">
                                    라인별
                                    <ul className="subSubMenu">
                                        <li>
                                            <Link to="/shop/line/1025">1025 독도</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/line/jajack">자작나무 수분</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/line/sonamu">소나무 진정 시카</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/line/yakkong">약콩 판테놀</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/line/man">포 맨</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/line/vita">비타 나이아신</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/line/baby">베이비</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop/line/dongbaek">동백 탄력</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <Link to="/event">EVENT</Link>
                    </li>

                    <li
                        className="brandMenu"
                        onMouseEnter={() => handleMouseEnter('brand')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to="/brand">BRAND</Link>
                        {hoveredMenu === 'brand' && (
                            <ul className="subMenu smallMenu">
                                <li>
                                    <Link to="/brand">BRAND STORY</Link>
                                </li>
                                <li>
                                    <Link to="/productLine">PRODUCT LINE</Link>
                                </li>
                                <li>
                                    <Link to="/magazine">MAGAZINE</Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li
                        className="csMenu"
                        onMouseEnter={() => handleMouseEnter('cs')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to="/notice">C/S CENTER</Link>
                        {hoveredMenu === 'cs' && (
                            <ul className="subMenu smallMenu">
                                <li>
                                    <Link to="/notice">NOTICE</Link>
                                </li>
                                <li>
                                    <Link to="/faq">FAQ</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>

                <ul className="topMenu">
                    <li>
                        <ul className="login">
<<<<<<< HEAD
                            <li
                                className="login"
                                onClick={
                                    authed ? () => dispatch(authActions.logout()) : toggleLogin
                                }
                                style={{ cursor: 'pointer' }}
                            >
                                {authed ? `LOGOUT (${user?.name}님 반갑습니다)` : 'LOGIN'}
=======
                            {authed ? (
                                <li className="loginwrap">
                                    <Link to="/logout">
                                        <span style={{ color: 'orange' }}>{user.name}</span>님
                                        LOGOUT
                                    </Link>
                                </li>
                            ) : (
                                <li
                                    className="login"
                                    onClick={toggleLogin}
                                    style={{ cursor: 'pointer' }}
                                >
                                    LOGIN
                                </li>
                            )}

                            <li>
                                <Link to="/login/join">JOIN</Link>
>>>>>>> 6735c7e912997e75e55851f896b944f336c8a761
                            </li>
                            {!authed && (
                                <li>
                                    <Link to="/login/join">JOIN</Link>
                                </li>
                            )}
                        </ul>
                    </li>

                    <li>
                        <Link to="/mypage">
                            <GoPerson className="person" />
                        </Link>
                    </li>

                    <li>
                        <ul className="search" onClick={toggleSearch}>
                            <li>
                                <IoMdSearch size={23} />
                            </li>
                        </ul>
                    </li>

                    <li>
                        <ul className="cart" onClick={toggleCart}>
                            <li>
                                <BsCart2 className="cartIcon" />
                            </li>
                            <li>
                                <p>{totalQuantity}</p>
                            </li>
                        </ul>
                    </li>
                </ul>

                {isCartOpen && <Cart onClose={toggleCart} carts={cartItems} />}
                {isSearchOpen && <Search onClose={toggleSearch} />}
                {isLoginOpen && <Login onClose={toggleLogin} />}
            </NavStyle>
        </>
    );
};

export default NavBar;

import { Link } from 'react-router-dom';
import { NavStyle } from './style';
import { BsCart2 } from 'react-icons/bs';
import { IoMdSearch } from 'react-icons/io';
import { GoPerson } from 'react-icons/go';
import { useState } from 'react';
import Cart from '../../components/cart/Cart';

const NavBar = ({ isMain }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const carts = []; // 장바구니 데이터 (props나 context로 연결 가능)

    //
    const [hoveredMenu, setHoveredMenu] = useState(null);

    const handleMouseEnter = (menu) => {
        setHoveredMenu(menu);
    };

    const handleMouseLeave = () => {
        setHoveredMenu(null);
    };
    //

    const toggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };
    return (
        <>
            <NavStyle className="nav" isMain={isMain}>
                <ul className="MainMenu">
                    <li
                        className="shopMenu"
                        onMouseEnter={() => handleMouseEnter('shop')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to="/shop/all/ALL">SHOP</Link>
                        {hoveredMenu === 'shop' && (
                            <ul className="subMenu">
                                <div className="navBg"></div>
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
                                <BsCart2 className="cartIcon" />
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

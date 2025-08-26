import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderStyle } from './style';
import NavBar from './NavBar';

const Header = () => {
    const location = useLocation();
    const isMainPath =
        location.pathname === '/' ||
        location.pathname === '/brand' ||
        location.pathname === '/productLine';

    const [isHover, setIsHover] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrollY(currentY);

            if (currentY > lastScrollY && currentY > 120) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollY(currentY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // 투명 조건: 메인 페이지 + hover 아님 + 스크롤 최상단
    const isTransparent = isMainPath && !isHover && scrollY < 100;

    return (
        <>
            <HeaderStyle $isTransparent={isTransparent} $show={showHeader}>
                <div
                    className="inner"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <h1>
                        <Link to="/">
                            <img
                                src={
                                    isTransparent
                                        ? '/images/Logo_White.png'
                                        : '/images/Logo_Blue.png'
                                }
                                alt="Logo"
                            />
                        </Link>
                    </h1>

                    {/* NavBar 내부에서 NavStyle 사용 시 `$isMain`으로 전달 필요 */}
                    <NavBar isMain={isTransparent} />
                </div>
            </HeaderStyle>

            {/* 헤더 자리 유지용 스페이서 */}
            {/* <div
                style={{
                    height: '120px',
                    pointerEvents: 'none',
                    opacity: isTransparent ? 0 : 1,
                    transition: 'opacity 0.3s ease',
                }}
            /> */}
        </>
    );
};

export default Header;

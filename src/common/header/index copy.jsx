import { useEffect, useState, useRef } from 'react';
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

    // ref는 제거 — 현재 사용하지 않으므로
    // const sectionRef = useRef(null);

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
    const useWhiteBackground = !isTransparent;

    return (
        <>
            <HeaderStyle
                isTransparent={isTransparent}
                show={showHeader}
                useWhite={useWhiteBackground}
            >
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
                    <NavBar isMain={isTransparent} />
                </div>
            </HeaderStyle>

            {/* 항상 높이는 유지하되, 투명 상태일 땐 안 보이게 */}
            <div
                style={{
                    height: '120px',
                    pointerEvents: 'none',
                    opacity: isTransparent ? 0 : 1,
                    transition: 'opacity 0.3s ease',
                }}
            />
        </>
    );
};

export default Header;

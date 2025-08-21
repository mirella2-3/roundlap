/* import { Link, useLocation } from 'react-router-dom';
import { HeaderStyle } from './style';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';

const Header = () => {
    const location = useLocation();
    const isMain =
        location.pathname === '/' ||
        location.pathname === '/brand' ||
        location.pathname === '/productLine';

    const [isHover, setIsHover] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const isActive = isMain && !isHover ? true : false;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 120) {
                // 스크롤 내림
                setShowHeader(false);
            } else {
                // 스크롤 올림
                setShowHeader(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);
    return (
        <>
            <HeaderStyle isMain={isActive} show={showHeader}>
                 <div className="navBg"></div> 
                <div
                    className="inner"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <h1>
                        <Link to="/">
                            <img
                                src={isActive ? '/images/Logo_White.png' : '/images/Logo_Blue.png'}
                                alt="Logo"
                            />
                        </Link>
                    </h1>
                    <NavBar isMain={isActive} />
                </div>
            </HeaderStyle>

            {isActive && <div style={{ height: '120px', pointerEvents: 'none' }} />}
        </>
    );
};

export default Header;
*/

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
    const [isPassedSection, setIsPassedSection] = useState(false);

    // ref로 감시할 섹션 (2번째 혹은 3번째 컴포넌트)
    const sectionRef = useRef(null);

    useEffect(() => {
        // IntersectionObserver 콜백
        const observer = new IntersectionObserver(
            ([entry]) => {
                // true면 섹션이 화면에 보이는 중
                setIsPassedSection(!entry.isIntersecting); // 섹션 안보이면 true (지남)
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY > lastScrollY && currentY > 120) {
                // 아래로 스크롤 중이면 숨김
                setShowHeader(false);
            } else {
                // 위로 스크롤 중이면 보임
                setShowHeader(true);
            }
            setLastScrollY(currentY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // 헤더가 투명한 조건 (메인 페이지 + hover 안한 상태 + 섹션 지나기 전)
    const isTransparent = isMainPath && !isHover && !isPassedSection;
    // 헤더 흰 배경 쓰는 조건
    const useWhiteBackground = (isPassedSection || !isMainPath) && showHeader;

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

            {/* 관찰할 섹션 예시 - 이걸 2~3번째 컴포넌트에 ref로 넣어야 함 */}
            <div
                ref={sectionRef}
                style={{ position: 'absolute', top: '700px', height: '1px', width: '100%' }}
            />

            {/* 헤더 투명 상태일 때 높이 유지용 placeholder */}
            {isTransparent && <div style={{ height: '120px', pointerEvents: 'none' }} />}
        </>
    );
};

export default Header;

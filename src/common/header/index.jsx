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
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const showHeader = true;
    const isTransparent = isMainPath && !isHover && scrollY < 100;

    const headerHeight = scrollY >= 100 ? 60 : 120;

    return (
        <HeaderStyle $isTransparent={isTransparent} $show={showHeader} $height={headerHeight}>
            <div
                className="inner"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <h1>
                    <Link to="/">
                        <img
                            src={isTransparent ? '/images/Logo_White.png' : '/images/Logo_Blue.png'}
                            alt="Logo"
                        />
                    </Link>
                </h1>

                <NavBar isMain={isTransparent} />
            </div>
        </HeaderStyle>
    );
};

export default Header;

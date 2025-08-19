import { Link, useLocation } from 'react-router-dom';
import { HeaderStyle } from './style';
import NavBar from './NavBar';

const Header = () => {
    const location = useLocation();
    const isMain =
        location.pathname === '/' ||
        location.pathname === '/brand' ||
        location.pathname === '/productLine';
    return (
        <HeaderStyle isMain={isMain}>
            {/* <div className="navBg"></div> */}
            <div className="inner">
                <h1>
                    <Link to="/">
                        <img
                            src={isMain ? '/images/Logo_White.png' : '/images/Logo_Blue.png'}
                            alt=""
                        />
                    </Link>
                </h1>
                <NavBar isMain={isMain} />
            </div>
        </HeaderStyle>
    );
};

export default Header;

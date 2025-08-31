import { Link } from 'react-router-dom';
import { HeaderStyle } from './style';
import NavBar from './NavBar';

const Header = () => {
    return (
        <HeaderStyle>
            <div className="inner">
                <h1>
                    <Link to="/">
                        <img src="./images/Logo_White.png" alt="" />
                    </Link>
                </h1>
                <NavBar />
            </div>
        </HeaderStyle>
    );
};

export default Header;

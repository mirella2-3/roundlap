import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ClickToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]); // URL(pathname)이 바뀔 때마다 실행

    return null;
};

export default ClickToTop;

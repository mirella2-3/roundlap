import { Outlet } from 'react-router-dom';

import { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Cart from '../components/cart/Cart';

const Layout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="wrap">
            <Header onIconClick={() => setIsModalOpen(true)} />
            <div style={{ height: '120px', pointerEvents: 'none' }} aria-hidden="true" />
            <main className="main">
                <Outlet />
            </main>
            <Footer />

            {/* 모달 */}
            {isModalOpen && <Cart onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default Layout;

import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import {
    Brand,
    Event,
    Faq,
    Join,
    Login,
    Logout,
    Magazine,
    Main,
    Mypage,
    Notfile,
    Notice,
    ProductLine,
    Shop,
} from './pages';
import { ProductDetail, ProductList } from './components';
import JoinSucess from './pages/login/JoinSucess';
import './App.css';
import Order from './pages/order/Order';
import ClickToTop from './components/scrolltotop/clickToTop';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <ClickToTop />
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />

                        {/* shop */}
                        <Route path="/shop/all" element={<Navigate to="/shop/all/ALL" replace />} />
                        <Route path="/shop/:category/:line" element={<Shop />} />

                        <Route path="/shop/:productId" element={<ProductDetail />} />
                        <Route path="/shop/order" element={<Order />} />

                        {/* Event */}
                        <Route path="/event" element={<Event />} />

                        {/* Brand */}
                        <Route path="/brand" element={<Brand />} />
                        <Route path="/productLine" element={<ProductLine />} />
                        <Route path="/magazine" element={<Magazine />} />

                        {/* Notice */}
                        <Route path="/notice" element={<Notice />} />
                        <Route path="/faq" element={<Faq />} />

                        {/* 단일 경로 */}
                        <Route path="/login/Login" element={<Login />} />
                        <Route path="/login/Logout" element={<Logout />} />
                        <Route path="/login/Join" element={<Join />} />
                        <Route path="/login/Join/success" element={<JoinSucess />} />
                        <Route path="/mypage" element={<Mypage />} />
                    </Route>
                    <Route path="/notfile" element={<Notfile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;

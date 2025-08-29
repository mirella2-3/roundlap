import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import {
    Brand,
    Event,
    Faq,
    Join,
    JoinSuccess,
    Login,
    Logout,
    LogoutSuccess,
    Magazine,
    Main,
    Mypage,
    MypageAccess,
    Notfile,
    Notice,
    Order,
    ProductLine,
    Shop,
} from './pages';
import ClickToTop from './components/scrolltotop/ClickToTop';
import './App.css';
import { PaySuccess, ProductDetail } from './components';

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
                        <Route path="/shop/order/PaySuccess" element={<PaySuccess />} />

                        {/* Event */}
                        <Route path="/event" element={<Event />} />

                        {/* Brand */}
                        <Route path="/brand" element={<Brand />} />
                        <Route path="/productLine" element={<ProductLine />} />
                        <Route path="/productLine/Detail" element={<ProductDetail />} />
                        <Route path="/magazine" element={<Magazine />} />

                        {/* Notice */}
                        <Route path="/notice" element={<Notice />} />
                        <Route path="/faq" element={<Faq />} />

                        {/* 단일 경로 */}
                        <Route path="/login/Login" element={<Login />} />
                        <Route path="/login/Logout" element={<Logout />} />
                        <Route path="/login/Join" element={<Join />} />
                        <Route path="/login/Join/success" element={<JoinSuccess />} />
                        <Route path="/logout/success" element={<LogoutSuccess />} />
                        <Route path="/mypage" element={<Mypage />} />
                        <Route path="/mypage/MypageAccess" element={<MypageAccess />} />
                    </Route>
                    <Route path="/notfile" element={<Notfile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />

                        {/* shop */}
                        <Route path="/shop">
                            <Route index element={<Shop />} />
                            <Route path=":category" element={<ProductList />} />
                            <Route path=":category/:productId" element={<ProductDetail />} />
                        </Route>

                        {/* Event */}
                        <Route path="/event" element={<Event />} />

                        {/* Brand */}
                        <Route path="/brand">
                            <Route index element={<Brand />} />
                            <Route path="/brand/productline" element={<ProductLine />} />
                            <Route path="/brand/magazine" element={<Magazine />} />
                        </Route>

                        {/* Notice */}
                        <Route path="/notice">
                            <Route index element={<Notice />} />
                            <Route path="/notice/faq" element={<Faq />} />
                        </Route>

                        {/* 단일 경로 */}

                        <Route path="/login/Login" element={<Login />} />
                        <Route path="/login/Logout" element={<Logout />} />
                        <Route path="/login/Join" element={<Join />} />
                        <Route path="/mypage" element={<Mypage />} />
                    </Route>
                    <Route path="/notfile" element={<Notfile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;

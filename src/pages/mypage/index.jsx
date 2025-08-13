import { MypageDetail, OrderCheck, WishList, WishListNoting } from '../../components';
import { MypageStyle } from './style';

const Mypage = () => {
    return (
        <MypageStyle>
            <div className="inner">
                <h2>MY PAGE</h2>

                <div className="namePoint">
                    <div>
                        <p>
                            <img src="./images/Mypage_profile.png" alt="" />
                        </p>
                        <strong>이름</strong>님은 일반회원 입니다.
                    </div>
                    <div>
                        적립금 <span>0</span>P
                    </div>
                </div>
                <section>
                    <MypageDetail />
                </section>
                <section>
                    <OrderCheck />
                </section>
                <section>
                    <p className="line"></p>
                </section>
                <section>
                    <div className="title">
                        <h3>위시리스트</h3>
                        <span className="more">더보기 +</span>
                    </div>

                    {/* <WishListNoting /> */}
                    <WishList />
                </section>
            </div>
        </MypageStyle>
    );
};

export default Mypage;

import { MypageDetail, OrderCheck, WishList } from '../../components';
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
                    <WishList />
                </section>
            </div>
        </MypageStyle>
    );
};

export default Mypage;

import { BestItemStyle } from './style';

const BestItem = () => {
    return (
        <BestItemStyle>
            <div className="inner">
                <h2>BEST ITEM</h2>
                <ul className="items">
                    <li>
                        <div className="wish">
                            <img src="/images/Main/Main-products01.png" alt="" />
                            <div className="bg">
                                <img src="/images/wish_1.png" alt="" />
                                <img src="/images/wish_2.png" alt="" />
                            </div>
                        </div>
                        <strong>1025 독도토너 대용량 500ml</strong>
                    </li>
                    <li>
                        <p>
                            <img src="/images/Main/Main-products02.png" alt="" />
                            <div className="bg">
                                <img src="/images/wish_1.png" alt="" />
                                <img src="/images/wish_2.png" alt="" />
                            </div>
                        </p>
                        <strong>1025 독도로션 200ml</strong>
                    </li>
                    <li>
                        <p>
                            <img src="/images/Main/Main-products03.png" alt="" />
                            <div className="bg">
                                <img src="/images/wish_1.png" alt="" />
                                <img src="/images/wish_2.png" alt="" />
                            </div>
                        </p>
                        <strong>1025 독도토너 200ml</strong>
                    </li>
                    <li>
                        <p>
                            <img src="/images/Main/Main-products04.png" alt="" />
                            <div className="bg">
                                <img src="/images/wish_1.png" alt="" />
                                <img src="/images/wish_2.png" alt="" />
                            </div>
                        </p>
                        <strong>1025 독도크림 80ml</strong>
                    </li>
                    <li>
                        <p>
                            <img src="/images/Main/Main-products05.png" alt="" />
                            <div className="bg">
                                <img src="/images/wish_1.png" alt="" />
                                <img src="/images/wish_2.png" alt="" />
                            </div>
                        </p>
                        <strong>1025 독도클렌져 150ml x 2 세트</strong>
                    </li>
                </ul>
            </div>
        </BestItemStyle>
    );
};

export default BestItem;

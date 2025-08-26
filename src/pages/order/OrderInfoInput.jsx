import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsedPoints } from '../../store/modules/OrderSlice';
import { OrderInfoInputStyles } from './style';
import PaymentSection from './Paymentsection';

const OrderInfoInput = () => {
    const dispatch = useDispatch();
    const availablePoints = useSelector((state) => state.order.userPoints || 0);

    const [form, setForm] = useState({
        userName: '',
        delivery: 'save',
        receiveName: '',
        address1: '',
        address2: '',
        postCode: '',
        phonePrefix: '010',
        phoneMid: '',
        phoneLast: '',
        postmessage: '',
        usedPoints: 0,
    });

    const onChange = (e) => {
        const { name, value, type } = e.target;

        if (name === 'usedPoints') {
            let pointsValue = Number(value);
            if (pointsValue > availablePoints) pointsValue = availablePoints;
            if (pointsValue < 0) pointsValue = 0;

            setForm({ ...form, [name]: pointsValue });
            dispatch(setUsedPoints(pointsValue));
            return;
        }

        if (type === 'radio') {
            setForm({ ...form, [name]: value });
        } else {
            setForm({ ...form, [name]: value });
        }
    };
    return (
        <OrderInfoInputStyles>
            <div className="orderlayout">
                <div className="orderName">
                    <label htmlFor="userName">
                        <h3>
                            주문자 명 <span>*</span>
                        </h3>
                    </label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        placeholder="이름을 입력해주세요."
                        value={form.userName}
                        onChange={onChange}
                    />
                </div>

                {/* 배송지 선택 */}
                <div className="resivechoice">
                    <div className="whos">
                        <label>
                            <input
                                type="radio"
                                name="delivery"
                                value="save"
                                checked={form.delivery === 'save'}
                                onChange={onChange}
                            />
                            <p>저장된 배송지</p>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="delivery"
                                value="new"
                                checked={form.delivery === 'new'}
                                onChange={onChange}
                            />
                            <p>신규배송지</p>
                        </label>
                    </div>
                    <div className="receiver">
                        <label htmlFor="password">
                            <h3>
                                받으시는 분 <span>*</span>
                            </h3>
                        </label>
                        <input
                            type="text"
                            id="receiveName"
                            name="receiveName"
                            placeholder="받으시는 분 이름을 입력해주세요."
                            value={form.receiveName || ''}
                            onChange={onChange}
                        />
                    </div>
                </div>

                {/* 주소 */}
                <div className="orderAddr">
                    <label htmlFor="postCode">
                        <h3> 주소</h3>
                    </label>
                    <input
                        type="text"
                        id="postCode"
                        name="postCode"
                        placeholder="우편번호"
                        value={form.postCode}
                        onChange={onChange}
                    />
                    <button type="button">주소검색</button>
                </div>
                <div className="orderAddr1">
                    <label htmlFor="postCode"></label>
                    <input
                        type="text"
                        id="address1"
                        name="address1"
                        placeholder="기본주소"
                        value={form.address1}
                        onChange={onChange}
                    />
                </div>
                <div className="orderAddr2">
                    <label htmlFor="postCode"></label>
                    <input
                        type="text"
                        id="address2"
                        name="address2"
                        placeholder="나머지주소 (상세주소)"
                        value={form.address2}
                        onChange={onChange}
                    />
                </div>

                {/* 휴대전화 */}
                <div className="orderPhone">
                    <label htmlFor="phoneMid">
                        <h3>
                            휴대전화 <span>*</span>
                        </h3>
                    </label>
                    <div className="joinPhoneNum">
                        <select name="phonePrefix" value={form.phonePrefix} onChange={onChange}>
                            <option value="010">010</option>
                            <option value="011">011</option>
                            <option value="016">016</option>
                            <option value="017">017</option>
                            <option value="018">018</option>
                            <option value="019">019</option>
                        </select>
                        -
                        <input
                            type="text"
                            name="phoneMid"
                            maxLength={4}
                            placeholder=""
                            value={form.phoneMid}
                            onChange={onChange}
                        />
                        -
                        <input
                            type="text"
                            name="phoneLast"
                            maxLength={4}
                            placeholder=""
                            value={form.phoneLast}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className="postmessge">
                    <label htmlFor="postmessage">
                        <h3>배송메세지</h3>
                    </label>
                    <input
                        type="text"
                        id="postmessge"
                        name="postmessge"
                        placeholder="선택사항"
                        value={form.postmessage}
                        onChange={onChange}
                    />
                </div>
                <div className="point">
                    <label htmlFor="point">
                        <h3>적립금 사용</h3>
                    </label>
                    <input
                        type="text"
                        id="point"
                        name="usedPoints"
                        placeholder="1000p 이상 사용 가능"
                        value={form.usedPoints}
                        onChange={onChange}
                        max={availablePoints}
                    />
                    <h4>p</h4>
                    <h5>(가용 적립금: {availablePoints}p)</h5>
                </div>
            </div>
            <PaymentSection />
        </OrderInfoInputStyles>
    );
};

export default OrderInfoInput;

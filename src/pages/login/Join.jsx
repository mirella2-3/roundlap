import { useState } from 'react';
import { JoinStyle } from './style';
import { useNavigate } from 'react-router-dom';

const Join = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        userId: '',
        password: '',
        passwordConfirm: '',
        name: '',
        postCode: '',
        address1: '',
        address2: '',
        phonePrefix: '010',
        phoneMid: '',
        phoneLast: '',
        email: '',
        gender: 'male',
        birthYear: '',
        birthMonth: '',
        birthDay: '',
        birthType: 'solar',
        agreeAll: false,
        agreeTerms: false,
        agreePrivacy: false,
        agreeInfo: false,
        agreeProcess: false,
    });

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => {
            const updated = {
                ...prev,
                [name]: type === 'checkbox' ? checked : value,
            };
            if (name.startsWith('agree') && name !== 'agreeAll') {
                const allChecked =
                    updated.agreeTerms &&
                    updated.agreePrivacy &&
                    updated.agreeInfo &&
                    updated.agreeProcess;

                updated.agreeAll = allChecked;
            }
            return updated;
        });
    };

    const onChangeAll = (e) => {
        const checked = e.target.checked;
        setForm((prev) => ({
            ...prev,
            agreeAll: checked,
            agreeTerms: checked,
            agreePrivacy: checked,
            agreeInfo: checked,
            agreeProcess: checked,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        navigate('/login/Join/success');
    };

    return (
        <JoinStyle>
            <form onSubmit={onSubmit}>
                <div className="inner">
                    <h2>회원가입</h2>
                    <div className="joinlayout">
                        <div className="EssentialInfo">
                            <strong>기본정보</strong>
                            <strong>
                                <span>*</span>필수정보
                            </strong>
                        </div>

                        {/* 아이디 */}
                        <div className="joinID">
                            <label htmlFor="userId">
                                아이디 <span>*</span>
                            </label>
                            <input
                                type="text"
                                id="userId"
                                name="userId"
                                placeholder="아이디를 입력해 주세요."
                                value={form.userId}
                                onChange={onChange}
                            />
                        </div>
                        <div className="small">영문소문자 또는 숫자 4~16자로 입력해 주세요.</div>

                        {/* 비밀번호 */}
                        <div className="joinPW">
                            <label htmlFor="password">
                                비밀번호 <span>*</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="비밀번호를 입력해 주세요."
                                value={form.password}
                                onChange={onChange}
                            />
                        </div>
                        <div className="small">
                            대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자로 입력해 주세요.
                        </div>

                        {/* 비밀번호 확인 */}
                        <div className="joinPWconfirm">
                            <label htmlFor="passwordConfirm">
                                비밀번호 확인 <span>*</span>
                            </label>
                            <input
                                type="password"
                                id="passwordConfirm"
                                name="passwordConfirm"
                                placeholder="비밀번호를 다시 한번 입력해 주세요."
                                value={form.passwordConfirm}
                                onChange={onChange}
                            />
                        </div>

                        {/* 이름 */}
                        <div className="joinName">
                            <label htmlFor="name">
                                이름 <span>*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="이름을 입력해 주세요."
                                value={form.name}
                                onChange={onChange}
                            />
                        </div>

                        {/* 주소 */}
                        <div className="joinAddr">
                            <label htmlFor="postCode">주소</label>
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
                        <div className="joinAddr1">
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
                        <div className="joinAddr2">
                            <label htmlFor="postCode"></label>
                            <input
                                type="text"
                                id="address2"
                                name="address2"
                                placeholder="상세주소"
                                value={form.address2}
                                onChange={onChange}
                            />
                        </div>

                        {/* 휴대전화 */}
                        <div className="joinPhone">
                            <label htmlFor="phoneMid">
                                휴대전화 <span>*</span>
                            </label>
                            <div className="joinPhoneNum">
                                <select
                                    name="phonePrefix"
                                    value={form.phonePrefix}
                                    onChange={onChange}
                                >
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

                        {/* 이메일 */}
                        <div className="joinEmail">
                            <label htmlFor="email">이메일</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="이메일을 입력해 주세요."
                                value={form.email}
                                onChange={onChange}
                            />
                        </div>

                        {/* 성별 */}
                        <div className="joinGender">
                            <label>
                                성별 <span>*</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={form.gender === 'male'}
                                    onChange={onChange}
                                />
                                남자
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={form.gender === 'female'}
                                    onChange={onChange}
                                />
                                여자
                            </label>
                        </div>

                        {/* 생년월일 */}
                        <div className="joinbirth">
                            <label htmlFor="phoneBirth">생년월일</label>
                            <div className="Phoneybd">
                                <input
                                    type="text"
                                    name="birthYear"
                                    maxLength={4}
                                    value={form.birthYear}
                                    onChange={onChange}
                                />
                                년
                                <input
                                    type="text"
                                    name="birthMonth"
                                    maxLength={4}
                                    value={form.birthMonth}
                                    onChange={onChange}
                                />
                                월
                                <input
                                    type="text"
                                    name="birthDay"
                                    maxLength={4}
                                    value={form.birthDay}
                                    onChange={onChange}
                                />
                                일
                            </div>
                            <div className="joinsolar">
                                <label>
                                    양력
                                    <input
                                        type="radio"
                                        name="birthType"
                                        value="solar"
                                        checked={form.birthType === 'solar'}
                                        onChange={onChange}
                                    />
                                </label>
                                <label>
                                    음력
                                    <input
                                        type="radio"
                                        name="birthType"
                                        value="lunar"
                                        checked={form.birthType === 'lunar'}
                                        onChange={onChange}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="agreementstext">
                            <h2>전체동의</h2>
                        </div>

                        {/* 약관 동의 */}
                        <div className="agreements">
                            <label>
                                <input
                                    type="checkbox"
                                    name="agreeAll"
                                    checked={form.agreeAll}
                                    onChange={onChangeAll}
                                />
                                이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두
                                동의합니다.
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="agreeTerms"
                                    checked={form.agreeTerms}
                                    onChange={onChange}
                                />
                                [필수] 이용약관 동의
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="agreePrivacy"
                                    checked={form.agreePrivacy}
                                    onChange={onChange}
                                />
                                [필수] 개인정보 수집 및 이용 동의
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="agreeInfo"
                                    checked={form.agreeInfo}
                                    onChange={onChange}
                                />
                                [선택] 마케팅 정보 수신 동의
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="agreeProcess"
                                    checked={form.agreeProcess}
                                    onChange={onChange}
                                />
                                [선택] 개인정보 처리 위탁 동의
                            </label>
                        </div>

                        <div className="buttons">
                            <button type="submit">가입하기</button>
                        </div>
                    </div>
                </div>
            </form>
        </JoinStyle>
    );
};

export default Join;

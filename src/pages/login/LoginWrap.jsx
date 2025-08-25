import { MdOutlineClose } from 'react-icons/md';
import { SearchStyle } from './style';
import { useEffect, useState } from 'react';

const KAKAO_JS_KEY = '7ea357e59ef6f9bc3a13e98433e37392';
const LoginWrap = ({ onClose }) => {
    const [kakaoLoaded, setKakaoLoaded] = useState(false);

    useEffect(() => {
        if (typeof window.Kakao !== 'undefined') {
            if (!window.Kakao.isInitialized()) {
                window.Kakao.init(KAKAO_JS_KEY);
                console.log('카카오 SDK 초기화 완료');
            }
            setKakaoLoaded(true);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        script.async = true;
        script.onload = () => {
            window.Kakao.init(KAKAO_JS_KEY);
            console.log('카카오 SDK 동적 로드 & 초기화 완료');
            setKakaoLoaded(true);
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleKakaoLogin = () => {
        if (!kakaoLoaded || !window.Kakao.isInitialized()) {
            alert('카카오 SDK가 아직 로드되지 않았습니다.');
            return;
        }

        window.Kakao.Auth.login({
            scope: 'profile_nickname, account_email',
            success: (authObj) => {
                console.log('로그인 성공', authObj);

                // 사용자 정보 요청
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: (res) => {
                        console.log('사용자 정보', res);
                    },
                    fail: (err) => {
                        console.error('사용자 정보 요청 실패', err);
                    },
                });
            },
            fail: (err) => {
                console.error('로그인 실패', err);
            },
        });
    };
    return (
        <SearchStyle>
            <article>
                <div className="LogLeft">
                    <h2>LOGIN</h2>
                    <form>
                        <input type="text" name="loginID" placeholder="아이디" />
                        <input type="text" name="loginPW" placeholder="비밀번호" />
                    </form>
                    <div className="userSet">
                        <p>
                            <input type="checkbox" name="ID_Save" />
                            아이디 저장
                        </p>
                        <p className="searchUser">
                            <strong>아이디 찾기</strong>
                            <strong>비밀번호 재설정</strong>
                        </p>
                    </div>
                    <button>로그인</button>
                    <button>회원가입</button>
                    <span>
                        비회원 주문조회
                        <img src="/images/Login/Login_arrow.png" alt="arrow" />
                    </span>
                    <div className="SNS">
                        <p>SNS 계정으로 로그인</p>
                        <img src="/images/Login/Login_SNS_naver.png" alt="snsNaver" />
                        <img
                            src="/images/Login/Login_SNS_kakao.png"
                            alt="snsKakao"
                            onClick={handleKakaoLogin}
                        />
                    </div>
                </div>
                <div className="LogRight">
                    <img src="/images/Login/Login_Logo.png" alt="logo" />
                </div>
            </article>

            <button className="Close" onClick={onClose}>
                <MdOutlineClose />
            </button>
        </SearchStyle>
    );
};

export default LoginWrap;

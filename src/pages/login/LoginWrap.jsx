import { MdOutlineClose } from 'react-icons/md';
import { SearchStyle } from './style';

const LoginWrap = ({ onClose }) => {
    return (
        <SearchStyle>
            <article>
                <div className="LogLeft">
                    <h2>LOGIN</h2>
                    <form>
                        <input type="text" name="loginID" id="" placeholder="아이디" />
                        <input type="text" name="loginPW" id="" placeholder="비밀번호" />
                    </form>
                    <div className="userSet">
                        <p>
                            <input type="checkbox" name="ID_Save" id="" />
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
                        <img src="/images/Login/Login_SNS_kakao.png" alt="snsKakao" />
                    </div>
                </div>
                <div className="LogRight">
                    <img src="/images/Login/Login_Logo.png" alt="logo" />
                </div>
            </article>

            <button className="Close">
                <MdOutlineClose className="Close" onClick={onClose} />
            </button>
        </SearchStyle>
    );
};

export default LoginWrap;

import {
    MdArrowBackIos,
    MdHomeFilled,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
} from 'react-icons/md';
import { ScrollStyle } from './style';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RiMegaphoneFill, RiSettings5Fill } from 'react-icons/ri';
import { IoIosArrowForward, IoMdChatbubbles } from 'react-icons/io';

const ScrollBtns = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    const [isChatVisible, setIsChatVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('home');

    const toggleChat = () => {
        setIsChatVisible((prev) => {
            const newState = !prev;
            if (newState) setActiveTab('home'); // 챗봇 켤 때 홈으로 초기화
            return newState;
        });
    };
    return (
        <ScrollStyle>
            <button className="chatBot" onClick={toggleChat}>
                Ch
            </button>
            {isChatVisible && (
                <div className="chat-window">
                    {activeTab === 'home' && (
                        <div className="chat-header">
                            라운드랩
                            <strong>
                                운영시간 보기 <IoIosArrowForward />
                            </strong>
                        </div>
                    )}

                    <div className="chat-body">
                        {activeTab === 'home' && (
                            <div className="chat-page">
                                <p className="logo">
                                    <img src="/images/Logo2.png" alt="" />
                                </p>
                                <p className="hi">
                                    안녕하세요.
                                    <br /> 라이프스타일 뷰티 브랜드 라운드 랩 입니다.
                                </p>
                                <div className="chat-button" onClick={() => setActiveTab('chat')}>
                                    문의하기
                                </div>
                                <div className="notice">
                                    <p className="circle"></p>문의량이 많아 답변이 지연되고
                                    있습니다.
                                </div>
                            </div>
                        )}

                        {activeTab === 'chat' && (
                            <div className="chat-content">
                                <p onClick={() => setActiveTab('home')}>
                                    <MdArrowBackIos size={20} color="#1a1a1a" />
                                </p>
                                <div className="notice">
                                    <p>
                                        <RiMegaphoneFill />
                                    </p>
                                    <span>
                                        무료배송 신규회원 10%쿠폰 <br />
                                        카카오 채널 추가시 5% 할인 코드 제공
                                    </span>
                                </div>
                                <div className="title">
                                    <p className="logo">
                                        <img src="/images/Logo_Blue.png" alt="" />
                                    </p>
                                    <strong>라운드 랩 문의하기</strong>
                                    <span>
                                        운영시간 보기 <IoIosArrowForward />
                                    </span>
                                </div>
                                <div className="chat_bubble">
                                    <div className="chat-bubble bot">
                                        안녕하세요.
                                        <br />
                                        라이프스타일 뷰티 브랜드 라운드 랩입니다.
                                        <br />
                                        무엇을 도와드릴까요?
                                    </div>
                                    <div className="chat-bubble user"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="chat-menu">
                        <div
                            className="icon_home"
                            onClick={() => setActiveTab('home')}
                            style={{ color: activeTab === 'home' ? '#1a1a1a' : '#8A8A8A' }}
                        >
                            <MdHomeFilled size={25} />
                            <p>홈</p>
                        </div>
                        <div
                            className="icon_chat"
                            onClick={() => setActiveTab('chat')}
                            style={{ color: activeTab === 'chat' ? '#1a1a1a' : '#8A8A8A' }}
                        >
                            <RiSettings5Fill size={25} />
                            <p>대화</p>
                        </div>
                        <div className="icon_set" style={{ color: '#8a8a8a' }}>
                            <IoMdChatbubbles size={25} />
                            <p>설정</p>
                        </div>
                    </div>
                </div>
            )}
            <button className="top" onClick={scrollToTop} aria-label="Scroll to top">
                <MdKeyboardArrowUp size={30} />
            </button>
            <button className="bottom" onClick={scrollToBottom} aria-label="Scroll to bottom">
                <MdKeyboardArrowDown size={30} />
            </button>
        </ScrollStyle>
    );
};

export default ScrollBtns;

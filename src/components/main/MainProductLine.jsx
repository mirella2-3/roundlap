import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { ProductLineStyle } from './style';
import { useEffect, useRef, useState } from 'react';

const buttonColors = [
    '#0087E0', // 슬라이드 0일 때 색상
    '#515151', // 슬라이드 1일 때 색상
    '#88502A', // 슬라이드 3일 때 색상
    '#1E8E67', // 슬라이드 2일 때 색상
    '#0087E0', // 슬라이드 0일 때 색상
    '#515151', // 슬라이드 1일 때 색상
    '#88502A', // 슬라이드 3일 때 색상
    '#1E8E67', // 슬라이드 2일 때 색상
];
const bgImages = [
    '/images/Main/BG_img-3.png',
    '/images/Main/BG_img.png',
    '/images/Main/BG_img-2.png',
    '/images/Main/BG_img-1.png',
    '/images/Main/BG_img-3.png',
    '/images/Main/BG_img.png',
    '/images/Main/BG_img-2.png',
    '/images/Main/BG_img-1.png',
];

const slidesData = [
    {
        span: '01',
        title: '1025 독도',
        description: (
            <>
                햇빛이 닿지 않는 바다 깊은 곳에서
                <br /> 끌어올려 깨끗하고 청정하며 <br />
                인체와 유사한 미네랄 밸런스로
                <br /> 만감 피부도 안심하고 사용할 수 있습니다.
            </>
        ),
        buttonColor: '#0087E0',
        bgImage: '/images/Main/BG_img-3.png',
    },
    {
        span: '02',
        title: '자작나무 수분',
        description: (
            <>
                선선한 바람의 청량한 기운을 머금고 자라난 <br />
                인제 자작나무 수액은 아미노산과 미네랄이 풍부하며 <br />
                건조한 피부에 수분을 공급해 <br />
                촉촉한 피부로 유지해 줍니다.
            </>
        ),
        buttonColor: '#515151',
        bgImage: '/images/Main/BG_img.png',
    },
    {
        span: '03',
        title: '약콩 판테놀',
        description: (
            <>
                소나무잎 추출물과 식물성 단백질 <br />
                글라이코프로테인, 다섯가지 시카 성분을 <br />
                최적의 비율로 배합한 독자 성분으로 <br />
                외부 자극에 민감해진 피부를 빠르게 케어해줍니다.
            </>
        ),
        buttonColor: '#88502A',
        bgImage: '/images/Main/BG_img-2.png',
    },
    {
        span: '04',
        title: '소나무 진정시카',
        description: (
            <>
                새벽이 차갑고 청량한 고랭지 정정 지역에서 <br />
                자라난 약콩은 단백질, 비타민B 등 영양이 풍부하여 <br />
                피부에 진한 보습감을 선사합니다.
            </>
        ),
        buttonColor: '#1E8E67',
        bgImage: '/images/Main/BG_img-1.png',
    },
    {
        span: '01',
        title: '1025 독도',
        description: (
            <>
                햇빛이 닿지 않는 바다 깊은 곳에서
                <br /> 끌어올려 깨끗하고 청정하며 <br />
                인체와 유사한 미네랄 밸런스로
                <br /> 만감 피부도 안심하고 사용할 수 있습니다.
            </>
        ),
        buttonColor: '#0087E0',
        bgImage: '/images/Main/BG_img-3.png',
    },
    {
        span: '02',
        title: '자작나무 수분',
        description: (
            <>
                선선한 바람의 청량한 기운을 머금고 자라난 <br />
                인제 자작나무 수액은 아미노산과 미네랄이 풍부하며 <br />
                건조한 피부에 수분을 공급해 <br />
                촉촉한 피부로 유지해 줍니다.
            </>
        ),
        buttonColor: '#515151',
        bgImage: '/images/Main/BG_img.png',
    },
    {
        span: '03',
        title: '약콩 판테놀',
        description: (
            <>
                소나무잎 추출물과 식물성 단백질 <br />
                글라이코프로테인, 다섯가지 시카 성분을 <br />
                최적의 비율로 배합한 독자 성분으로 <br />
                외부 자극에 민감해진 피부를 빠르게 케어해줍니다.
            </>
        ),
        buttonColor: '#88502A',
        bgImage: '/images/Main/BG_img-2.png',
    },
    {
        span: '04',
        title: '소나무 진정시카',
        description: (
            <>
                새벽이 차갑고 청량한 고랭지 정정 지역에서 <br />
                자라난 약콩은 단백질, 비타민B 등 영양이 풍부하여 <br />
                피부에 진한 보습감을 선사합니다.
            </>
        ),
        buttonColor: '#1E8E67',
        bgImage: '/images/Main/BG_img-1.png',
    },
];

const MainProductLine = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [fadeProgress, setFadeProgress] = useState(1); // 1 → 0 으로 감소, 0 → 1 으로 증가
    const currentColor = buttonColors[activeIndex] || '#0087E0';
    useEffect(() => {
        const img = new Image();
        img.src = bgImages[activeIndex];

        if (activeIndex === prevIndex) return;

        setFadeProgress(1); // 페이드 시작 (prev 이미지 완전 보임)

        const fadeDuration = 600;
        const intervalTime = 30; // 애니메이션 부드럽게 만들기 위한 간격
        const steps = fadeDuration / intervalTime;
        let currentStep = 0;

        const intervalId = setInterval(() => {
            currentStep++;
            const progress = 1 - currentStep / steps; // 1 → 0

            if (progress <= 0) {
                setPrevIndex(activeIndex); // 이미지 교체
                setFadeProgress(1); // 새 이미지 완전 보임
                clearInterval(intervalId);
            } else {
                setFadeProgress(progress);
            }
        }, intervalTime);

        return () => clearInterval(intervalId);
    }, [activeIndex]);

    return (
        <ProductLineStyle>
            <div className="bg-wrapper">
                {/* 이전 이미지 */}
                <img
                    src={bgImages[prevIndex]}
                    alt="이전 배경"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: fadeProgress, // 1 → 0
                        transition: 'opacity 0.03s linear',
                        zIndex: 0,
                    }}
                />
                {/* 현재 이미지 */}
                <img
                    src={bgImages[activeIndex]}
                    alt="현재 배경"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 1 - fadeProgress, // 0 → 1
                        transition: 'opacity 0.03s linear',
                        zIndex: 1,
                    }}
                />
            </div>
            <div className="inner">
                <h2>PRODUCT LINE</h2>
                <Swiper
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    observer={true}
                    observeParents={true}
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            swiper.update();
                        }, 1000);
                    }}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next',
                    }}
                >
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <span>{slide.span}</span>
                            <h4>{slide.title}</h4>
                            <strong>{slide.description}</strong>
                            <button
                                className="btn"
                                onClick={() => navigate('/productLine')}
                                onMouseEnter={(e) => {
                                    if (index === activeIndex) {
                                        const color = buttonColors[index];
                                        e.currentTarget.style.setProperty(
                                            '--btn-hover-color',
                                            color
                                        );
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.removeProperty('--btn-hover-color');
                                }}
                            >
                                View Collection
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="custom-prev">
                    <MdArrowBackIosNew />
                </button>
                <button className="custom-next">
                    <MdArrowForwardIos />
                </button>
            </div>
        </ProductLineStyle>
    );
};

export default MainProductLine;

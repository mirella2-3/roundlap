import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import 'swiper/css/pagination';
import { ProductLineStyle } from "./style";
import { useState } from "react";

const bgImages = [
  "/images/Main/BG_img-3.png",
  "/images/Main/BG_img-1.png",
  "/images/Main/BG_img-2.png",
  "/images/Main/BG_img.png",
  "/images/Main/BG_img-3.png",
  "/images/Main/BG_img-1.png",
  "/images/Main/BG_img-2.png",
  "/images/Main/BG_img.png",
];

const MainProductLine = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <ProductLineStyle>
      <div className="bg">
        <img src={bgImages[activeIndex]} alt="배경" />
      </div>
      <div className="inner">
        <h2>PRODUCT LINE</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          observer={true}
          observeParents={true}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.update();
            }, 100);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
        >
          <SwiperSlide>
            <span>01</span>
            <h4>1025 독도</h4>
            <strong>
              햇빛이 닿지 않는 바다 깊은 곳에서
              <br /> 끌어올려 깨끗하고 청정하며 <br />
              인체와 유사한 미네랄 밸런스로
              <br /> 만감 피부도 안심하고 사용할 수 있습니다.
            </strong>
            <button onClick={() => navigate("/brand/productline")}>
              View Collection
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <span>02</span>
            <h4>자작나무 수분</h4>
            <strong>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit, sed do eiusmod tempor
              <br /> incididunt ut labore et dolore magna aliqua.
            </strong>
            <button onClick={() => navigate("/brand/productline")}>
              View Collection
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <span>03</span>
            <h4>약콩 판테놀</h4>
            <strong>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit, sed do eiusmod tempor
              <br /> incididunt ut labore et dolore magna aliqua.
            </strong>
            <button onClick={() => navigate("/brand/productline")}>
              View Collection
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <span>04</span>
            <h4>소나무 진정시카</h4>
            <strong>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit, sed do eiusmod tempor
              <br /> incididunt ut labore et dolore magna aliqua.
            </strong>
            <button onClick={() => navigate("/brand/productline")}>
              View Collection
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <span>01</span>
            <h4>1025 독도</h4>
            <strong>
              햇빛이 닿지 않는 바다 깊은 곳에서
              <br /> 끌어올려 깨끗하고 청정하며 <br />
              인체와 유사한 미네랄 밸런스로
              <br /> 만감 피부도 안심하고 사용할 수 있습니다.
            </strong>
            <button onClick={() => navigate("/brand/productline")}>
              View Collection
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <span>02</span>
            <h4>자작나무 수분</h4>
            <strong>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit, sed do eiusmod tempor
              <br /> incididunt ut labore et dolore magna aliqua.
            </strong>
            <button onClick={() => navigate("/brand/productline")}>
              View Collection
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <span>03</span>
            <h4>약콩 판테놀</h4>
            <strong>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit, sed do eiusmod tempor
              <br /> incididunt ut labore et dolore magna aliqua.
            </strong>
            <button onClick={() => navigate("/brand/productline")}>
              View Collection
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <span>04</span>
            <h4>소나무 진정시카</h4>
            <strong>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit, sed do eiusmod tempor
              <br /> incididunt ut labore et dolore magna aliqua.
            </strong>
            <button onClick={() => navigate("/brand/productline")}>
              View Collection
            </button>
          </SwiperSlide>
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

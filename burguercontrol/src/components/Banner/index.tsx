import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./styles.module.css";
import { Autoplay } from "swiper/modules";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            1{/*<img src="/tmp/banner1.png" />*/}
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
            2{/*<img src="/tmp/banner2.png" />*/}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

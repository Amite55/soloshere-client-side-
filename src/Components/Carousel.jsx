
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

import image1 from '../assets/images/carousel1.jpg';
import image2 from '../assets/images/carousel2.jpg';
import image3 from '../assets/images/carousel3.jpg';

export default function carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image={image1} text='Get your web development project done in minutes'/></SwiperSlide>
        <SwiperSlide><Slide image={image2} text='Start your Marketing campaigns running'/></SwiperSlide>
        <SwiperSlide><Slide image={image3} text='Get your Grapics Design done in minutes'/></SwiperSlide>
        
      </Swiper>
    </div>
  );
}

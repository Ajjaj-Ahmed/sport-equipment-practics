import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';



import imageOne from '../assets/imageOne.jpg'
import imageTwo from '../assets/iamgeTwo.jpeg'
import imagethree from '../assets/imageThree.jpg'
import imageFour from '../assets/imagefour.jpg'

const ImageSlider = () => {

  return (
    <Swiper
    className='rounded-xl'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide><img src={imageOne} className='w-full max-h-[500px] object-fill' /></SwiperSlide>
      <SwiperSlide><img src={imageTwo} className='w-full max-h-[500px] object-fill' /></SwiperSlide>
      <SwiperSlide><img src={imagethree} className='w-full max-h-[500px] object-fill' /></SwiperSlide>
      <SwiperSlide><img src={imageFour} className='w-full max-h-[500px] object-fill' /></SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
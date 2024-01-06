
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import img1 from '../../../assets/images/category/1.jpg'
import img2 from '../../../assets/images/category/2.jpg'
import img3 from '../../../assets/images/category/3.jpg'
import img4 from '../../../assets/images/category/4.jpg'
import img5 from '../../../assets/images/category/5.jpg'
import img6 from '../../../assets/images/category/6.jpg'
import img7 from '../../../assets/images/category/7.jpg'
import img8 from '../../../assets/images/category/8.jpg'
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
const Category = () => {
    return (
        <section>
            <SectionTitle miniTitle={"Top Categories"} mainTitle={"-Flagship Categories-"} />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative overflow-hidden'>
                        <img className='hover:scale-125 duration-200' src={img1} alt="" />
                        <h2 className='absolute bg-opacity-70 py-2 md:text-4xl -mt-11 md:-mt-32 text-white bg-black w-full text-center'>Fashion 404s</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative overflow-hidden'>
                        <img className='hover:scale-125 duration-200' src={img2} alt="" />
                        <h2 className='absolute bg-opacity-70 py-2 md:text-4xl -mt-11 md:-mt-32 text-white bg-black w-full text-center'>Fashion 040</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative overflow-hidden'>
                        <img className='hover:scale-125 duration-200' src={img3} alt="" />
                        <h2 className='absolute bg-opacity-70 py-2 md:text-4xl -mt-11 md:-mt-32 text-white bg-black w-full text-center'>Fashion 003</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative overflow-hidden'>
                        <img className='hover:scale-125 duration-200' src={img4} alt="" />
                        <h2 className='absolute bg-opacity-70 py-2 md:text-4xl -mt-11 md:-mt-32 text-white bg-black w-full text-center'>Fashion 980</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative overflow-hidden'>
                        <img className='hover:scale-125 duration-200' src={img5} alt="" />
                        <h2 className='absolute bg-opacity-70 py-2 md:text-4xl -mt-11 md:-mt-32 text-white bg-black w-full text-center'>Fashion 801</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative overflow-hidden'>
                        <img className='hover:scale-125 duration-200' src={img6} alt="" />
                        <h2 className='absolute bg-opacity-70 py-2 md:text-4xl -mt-11 md:-mt-32 text-white bg-black w-full text-center'>Fashion 900</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={img7} alt="" />
                        <h2 className='absolute bg-opacity-70 py-2 md:text-4xl -mt-11 md:-mt-32 text-white bg-black w-full text-center'>Fashion 808</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={img8} alt="" />
                        <h2 className='absolute bg-opacity-70 py-2 md:text-4xl -mt-11 md:-mt-32 text-white bg-black w-full text-center'>Fashion 102</h2>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;
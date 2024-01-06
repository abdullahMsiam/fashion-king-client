import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';

/* rating */
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ReviewsTake = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <SectionTitle miniTitle={"What you say"} mainTitle={"- Our Beloved Family -"} />

            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}>
                        <div className='px-11 mx-8 font-mono py-8'>
                            <Rating
                                className='mx-auto'
                                style={{ maxWidth: 180 }}
                                value={review.ratings}
                                readOnly
                            />
                            <p className='text-black'>{review.review}</p>
                            <p className='text-xl font-semibold text-blue-600'>----{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default ReviewsTake;
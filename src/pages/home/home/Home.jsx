import Featured from '../../featured/Featured';
import Banner from '../banner/Banner';
import Category from '../category/Category';
import PopularItem from '../popularItem/PopularItem';
import ReviewsTake from '../reviewsTake/ReviewsTake';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularItem />
            <Featured />
            <ReviewsTake />
        </div>
    );
};

export default Home;
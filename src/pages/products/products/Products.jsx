import { Helmet } from "react-helmet-async";
import Cover from "../../common/cover/Cover";

import coverImg from '../../../assets/images/products/products-cover.jpg'
import PopularItem from "../../home/popularItem/PopularItem";
const Products = () => {
    return (
        <div>
            <Helmet>
                <title>Fashion-King | Products</title>
            </Helmet>
            <Cover img={coverImg} coverTitle={"Our King Products"} />
            <PopularItem />
            <Cover img={coverImg} coverTitle={"Our King Products"} />
            <PopularItem />
            <Cover img={coverImg} coverTitle={"Our King Products"} />
            <PopularItem />
        </div>
    );
};

export default Products;
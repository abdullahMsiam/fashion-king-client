import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import Items from "../../common/item/Items";

const PopularItem = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('item.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(i => i.category === "popular");
                setItems(popularItem);
            })
    }, [])
    return (
        <section>
            <SectionTitle miniTitle={"Popular Fashion"} mainTitle={"- King Type Items -"} />
            <div className="grid md:grid-cols-2 gap-4">
                {
                    items.map(product => <Items
                        key={product._id}
                        item={product}
                    />)
                }
            </div>
        </section>
    );
};

export default PopularItem;
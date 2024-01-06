
const Items = ({ item }) => {
    const { name, image, details, price } = item;
    console.log(price)
    return (
        <section>
            <div className="flex items-center gap-2 md:gap-4 mx-4 bg-black bg-opacity-10 md:p-2 rounded-xl">
                <img className="w-20 md:w-28 h-32 rounded-full" src={image} alt="" />
                <div className="flex grow">
                    <div className="w-11/12">
                        <h2 className="md:text-xl uppercase font-semibold border border-b-black">{name}</h2>
                        <p>{details}</p>
                    </div>
                    <div>
                        <p className="text-blue-600 font-bold md:text-xl border border-b-black">${price}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Items;
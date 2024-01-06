import shopImg from '../../assets/images/home/shop.jpg';
import SectionTitle from '../../components/sectionTitle/SectionTitle';

import './Featured.css'
const Featured = () => {
    return (
        <section>
            <SectionTitle miniTitle={"Exclusive Fashion"} mainTitle={"- Our Latest Outlet -"} />
            <div className='bg-featured bg-fixed'>
                <div className=' text-white bg-black bg-opacity-70 py-28 px-12 md:flex items-center justify-center gap-5'>
                    <div className='w-11/12'>
                        <img className='md:h-[350px] w-full' src={shopImg} alt="" />
                    </div>
                    <div className='w-full'>
                        <h2 className='uppercase text-xl font-bold mb-4'>Opening Date: 20th January, 2024</h2>
                        <p className='mb-4'>Embarking on the journey of opening a clothing shop is an exciting endeavor, and the establishment is aptly named `Fashion King.` This boutique promises to reign over style, offering a curated selection of trendy and timeless apparel for individuals with a discerning taste in fashion. `Fashion King` is envisioned as more than just a retail space; it is a haven for those seeking the latest in vogue, blending contemporary aesthetics with classic elegance. The store aims to provide a unique shopping experience, where patrons can explore a diverse range of clothing, from chic everyday wear to sophisticated statement pieces fit for any occasion. `Fashion King` aspires to be a go-to destination, setting a royal standard in the world of fashion retail, where every visitor is treated like fashion royalty.</p>
                        {/* customize button */}
                        <button className="btn btn-outline rounded-none uppercase font-serif border border-white text-white bg-black hover:bg-white hover:text-black w-44">Join Us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
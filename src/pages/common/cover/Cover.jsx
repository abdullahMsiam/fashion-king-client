import { Parallax } from 'react-parallax';

const Cover = ({ img, coverTitle }) => {
    return (
        <Parallax
            blur={{ min: -25, max: 25 }}
            bgImage={img}
            bgImageAlt="clothing products"
            strength={-200}
        >
            <div className="hero h-[600px] text-white" /* style={{ backgroundImage: `url(${img})` }} */>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{coverTitle}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>{/* 
            <div style={{ height: '200px' }} /> */}
        </Parallax>

    );
};

export default Cover;
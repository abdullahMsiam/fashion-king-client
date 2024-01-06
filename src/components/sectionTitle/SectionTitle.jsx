
const SectionTitle = ({ miniTitle, mainTitle }) => {
    return (
        <div className="text-center mt-8 mb-5">
            <h2 className="opacity-90 uppercase">{miniTitle}</h2>
            <h1 className="text-2xl font-semibold uppercase font-serif">{mainTitle}</h1>
        </div>
    );
};

export default SectionTitle;
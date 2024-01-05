import { Outlet } from 'react-router-dom';
import Footer from '../pages/common/footer/Footer';
import Navbar from '../pages/common/navBar/Navbar';

const Main = () => {
    return (
        <div >
            <Navbar />
            <div className='max-w-screen-xl mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
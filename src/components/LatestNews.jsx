
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='bg-[#F3F3F3] p-2 mt-5'>
            <div className='flex items-center '>
                <p className='bg-[#D72050] p-3 text-xl'>Latest</p>
                <Marquee pauseOnHover={true} className='text-xl'>
                    <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit illo iste esse eaque, amet quia.</Link>
                    <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit illo iste esse eaque, amet quia.</Link>
                    <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit illo iste esse eaque, amet quia.</Link>
                    <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit illo iste esse eaque, amet quia.</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;
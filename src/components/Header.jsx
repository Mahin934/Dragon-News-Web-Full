
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center pt-5 space-y-3'>
            <div className=''>
                 <img src={logo} alt="" />
            </div>
            <h3 className='text-[rgb(112,111,111)] text-xl'>Journalism Without Fear or Favour</h3>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;
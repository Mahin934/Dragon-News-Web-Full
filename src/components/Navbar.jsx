
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)

    return (
        <div className='flex justify-between mt-10'>
            <div>
              {user && user.email}  
            </div>
            <div className='text-[#706F6F] space-x-7'>
                <Link to='/' className='btn'>Home</Link>
                <Link to='/about' className='btn'>About</Link>
                <Link to='/career' className='btn'>Career</Link>
            </div>
            <div className='flex gap-6 items-center'>
                {
                    user && user?.email?  <div className='flex justify-center gap-3 items-center '> 
                    <img className='w-8 h-8 rounded-full' src={user.photoURL} alt="" />
                    <p>{user.displayName}</p>
                    </div> 
                     : 
                     <img src={userIcon} alt="" />
                }
                
                {
                    user && user?.email? <button onClick={logOut} className='btn btn-neutral rounded-none'>Log Out</button>
                    :
                    <Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
        <div className="bg-[#F3F3F3] min-h-screen">
            <div className='md:container mx-auto'>
                <header>
                    <Navbar></Navbar>
                </header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;
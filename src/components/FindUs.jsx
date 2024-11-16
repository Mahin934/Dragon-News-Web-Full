import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="mt-8">
            <h1 className="font-semibold text-xl ">Find Us On</h1>
            <div className="join join-vertical w-full *:bg-base-100 *:text-lg">
                <button className="btn join-item justify-start"><FaFacebookF />Facebook</button>
                <button className="btn join-item justify-start"><FaTwitter />Twitter</button>
                <button className="btn join-item justify-start"><FaInstagram />Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;
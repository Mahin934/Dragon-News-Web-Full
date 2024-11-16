import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className="font-semibold text-xl ">Login With</h1>
            <div className="flex flex-col gap-3 mt-4">
                <button className="btn"><FaGoogle />Login With Google</button>
                <button className="btn"><FaGithub />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;
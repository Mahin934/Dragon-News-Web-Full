import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    // State for error message
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setErrorMessage(""); // Clear error message on success
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                // Set the error message to display
                setErrorMessage(error.message);
            });
    };

    return (
        <div className="flex justify-center py-28">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-center text-2xl pt-8 font-bold">Login to your account</h1>
                <div className="divider px-8 mb-0"></div>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email address</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    {/* Display error message if exists */}
                    {errorMessage && (
                        <p className="text-red-500 text-sm text-center ">{errorMessage}</p>
                    )}

                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] text-white">Login</button>
                    </div>
                    <p className="text-center pt-4 text-xs">
                        Don’t Have An Account?{" "}
                        <Link className="text-red-500" to="/auth/register">
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;

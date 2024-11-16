import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const { createNewUser, setUser,updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    // State for error message
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        // Validate password length
        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters long.");
            return;
        }

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({displayName
                    :name, photoURL:photo
                }).then(()=>{
                   navigate("/");
                });
                setErrorMessage(""); 
            })
            .catch((error) => {
                // Set the error message to display
                setErrorMessage(error.message);
            });
    };

    return (
        <div className="flex justify-center py-20">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-center text-2xl pt-8 font-bold">Register your account</h1>
                <div className="divider px-8 mb-0"></div>
                <form onSubmit={handleSubmit} className="card-body">
                    {/* Name input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    {/* Photo URL input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Your Photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    {/* Email input */}
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
                    {/* Password input */}
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
                        <button className="btn bg-[#403F3F] text-white">Register</button>
                    </div>
                    <p className="text-center pt-4 text-xs">
                        Already Have An Account?{" "}
                        <Link className="text-red-500" to="/auth/login">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;

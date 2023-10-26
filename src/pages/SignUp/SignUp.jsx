import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister  = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200 mb-12">
            <div className="hero-content gap-10 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h2 className='text-3xl font-bold text-center'>Sign Up</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#FF3811] text-white" type="submit" value="Sign In" />
                        </div>
                    </form>
                    <p className='text-center mb-5'>Already have an account? <Link className='text-blue-500 underline' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
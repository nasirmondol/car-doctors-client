import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/login/login.svg'
const Login = () => {
    const handleLogin = e =>{
        e.preventDefault();

    }
    return (
        <div className="hero min-h-screen bg-base-200 mb-12">
            <div className="hero-content gap-10 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={loginImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className='text-3xl font-bold text-center'>Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="name" placeholder="email" className="input input-bordered" required />
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
                    <p className='text-center mb-5'>New here? <Link className='text-blue-500 underline' to="/signup">Sign Up now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
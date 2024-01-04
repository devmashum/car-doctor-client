import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {

    const { signIn } = useContext(AuthContext);
      const navigate = useNavigate();
      const location= useLocation();
      const from = location.state?.from?.pathname || '/';
   
    console.log(location);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email };
                axios.post('https://cardoctor-server-xi.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)})
            })
      
            .catch(error => console.log(error));
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Logged in Successfully",
                showConfirmButton: false,
                timer: 2500
            });
            navigate(from, { replace: true });
    }

    return (
        <div className="hero min-h-screen bg-base-200  ">
            <div className="hero-content">
                <div className="w-1/2 mr-12 lg:block hidden">

                    <img className='' src={img} alt="" />
                </div>
                <div className="card-shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100 p-5 rounded-xl">
                    <h1 className="text-3xl font-bold p-5 text-center">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
                                name='password'
                                required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                          <input className='btn bg-[#FF3811] hover:bg-slate-500 text-white' type="submit" value="Login" /> 
                        </div>
                    </form>
                    <p className='text-center'>New to Car Doctors <Link className='text-[#FF3811] text-xl font-bold' to={'/signup'} >Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
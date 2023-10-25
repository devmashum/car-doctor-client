import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content">
                <div className=" w-1/2 mr-12">

                    <img src={img} alt="" />
                </div>
                <div className="card-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 p-5 rounded-xl">
                    <h1 className="text-3xl font-bold p-5 text-center">Login now!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" name='name' required />
                        </div>

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

                            <input className='btn btn-primary' type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an Account? <Link to={'/login'} className='text-orange-700 font-bold text-xl' >Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
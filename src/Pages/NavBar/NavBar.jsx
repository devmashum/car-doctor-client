import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo.svg";
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { MdOutlineAddShoppingCart } from "react-icons/md";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>

        <NavLink to={'/'}> <li className='mr-3 text-[18px] font-semibold'>Home</li> </NavLink>
        <NavLink to={'/shop'}> <li className='mr-3 text-[18px] font-semibold'>Shop</li> </NavLink>
        <NavLink to={'/contact'}> <li className='mr-3 text-[18px] font-semibold'>Contact</li> </NavLink>

        {user?.email ? <>
            <NavLink to={'bookings'}><li className='mr-3 text-[18px] font-semibold' >My Booking</li></NavLink>
          
        </> :
            <></>}
                        <div className='mr-5 text-[18px] font-semibold lg:hidden'>
                {
                    user? <button onClick={handleLogOut}>Logout</button>: <Link to={'/login'}>Login</Link>
                }
            </div>



    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to={'/'}>   <img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
            <div className='text-2xl font-bold mr-5'><MdOutlineAddShoppingCart /></div>
            {
                    user? <button className='mr-5 text-[18px] font-semibold lg:block hidden' onClick={handleLogOut}>Logout</button>: <Link to={'/login'}>Login</Link>
                }
                <button className='btn btn-outline text-[18px] font-bold text-[#FF3811]'>Appoinment</button>
            </div>
        </div>
    );
};

export default NavBar
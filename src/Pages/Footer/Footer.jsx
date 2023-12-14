import React from 'react';
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#151515]  text-white lg:mt-20">
            <Link to={'/'}><img className='bg-white p-5 rounded-xl' src={logo} alt="" /></Link>
         
            <nav>
                <header className="footer-title">Location</header>
             <h3 className='text-base'>
             Car Doctor <br />
             321 Design Plaza <br />
             Los Angeles, CA 90001
             </h3>
            </nav>
            <nav>
                <header className="footer-title">Contact Details</header>
                <h3 className='text-base'>
                Telefon: +41 22 800 935 833 <br />
                Fax: +41 22 2244506-10 <br />
                E-Mail: mail@acar-doctor.com
             </h3>
            </nav>
            <nav>
                <header className="footer-title ">Legal</header>
                <a className="link link-hover text-base" href='/'>Terms of use</a>
                <a className="link link-hover text-base" href='/'>Privacy policy</a>
                <a className="link link-hover text-base" href='/'>Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;
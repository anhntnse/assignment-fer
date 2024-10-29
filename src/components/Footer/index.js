import React from 'react';
import { VscSend } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import './Footer.scss';


function Footer() {
    return (
        <div className=' container-fluid' style={{ marginTop: '100px', color: '#fff', background: 'black', paddingTop: '80px' }}>
            <div className='row  justify-content-between gap-5'>
                <div className='col-md-2' style={{ textAlign: 'left' }}>
                    <h4>
                        <a>Exclusive</a>
                    </h4>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <div className='d-flex footer-input-search'>
                        <input type='text' placeholder='Enter your email' style={{ borderRight: '0', outline: 'white', background: 'black', caretColor: '#fff' }} />
                        <button type='button' className='btn' style={{ border: 0, backgroundColor: 'black', border: '2px solid', borderLeft: '0', borderRadius: 0 }}><VscSend style={{ color: " #fff", background: 'black' }} /></button>
                    </div>
                </div>
                <div className='col-md-2' style={{ textAlign: 'left' }}>
                    <h5 className='mb-4'>
                        <a>Support</a>
                    </h5>
                    <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className='col-md-2' style={{ textAlign: 'left' }}>
                    <h5 className='mb-4'>
                        <a>Account</a>
                    </h5>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className='col-md-2' style={{ textAlign: 'left' }}>
                    <h5 className='mb-4'>
                        <a>Quick Link</a>
                    </h5>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className='col-md-2' style={{ textAlign: 'left' }}>
                    <h5 className='mb-4'>
                        <a>Download App</a>
                    </h5>
                    <p style={{ fontSize: '0.8rem', marginBottom: '3px' }}>Save $3 with App New User Only</p>
                    <div className='d-flex gap-2'>
                        <img src='data:image/png;base64,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' className='w-50 h-50' />
                        <div className='d-flex flex-column justify-content-center gap-2'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png' className='w-100' style={{ height: '45%' }} />
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png' className='w-100' style={{ height: '45%' }} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-around mt-3'>
                        <FaFacebookF />
                        <FiTwitter />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <p className='d-flex align-items-center justify-content-center' style={{ opacity: '0.3' }}>
                    <FaCopyright style={{ marginRight: '2px' }} />
                    Copyright Rimel 2022. All right reserved
                </p>
            </div>
        </div>
    )
}

export default Footer;
import React from 'react'
import './FooterStyle.css'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }}></FaHome>
                    
                    <div>
                        <p>74394 Hessigheim</p>
                        <p>Baden-Württemberg, Germany</p>
                    </div>
                    </div>
                    <div className='phone'>
                        <h4>
                            <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }}></FaPhone>
                            +49 178 9806278
                        </h4>
                    </div>
                    <div className='email'>
                        <h4>
                            <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }}></FaMailBulk>
                            info@gmail.com
                        </h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the company</h4>
                    <p>This is Sumanth. I am a thriving and enthusiastic developer</p>
                <div className='social'>
                <FaFacebook size={30} style={{ color: '#fff', marginRight: '1rem' }}></FaFacebook>
                 
                 <FaInstagram size={30} style={{ color: '#fff', marginRight: '1rem' }}>
              
                 </FaInstagram>
                 <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }}></FaLinkedin>
                </div>
                
                            
                </div>
            </div>
        </div>
    )
}

export default Footer
import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
        <div>
            <h5>
                © Juan David Gongora Developer
            </h5>
            <div className='icon-container'>
                <a 
                href="https://github.com/JuanDavidGongora" 
                target="_blank"
                className='a-decoration'
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className='bx bxl-github icon-size' aria-hidden='true'></i>
                </a>
                
                <a 
                href="https://wa.me/573106583256" 
                target="_blank"
                className='a-decoration'
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className='bx bxl-whatsapp icon-size' aria-hidden='true'></i>
                </a>
            </div>
        </div>
    </footer>

    );
};

export default Footer;
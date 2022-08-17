import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
        <div>
            <h5>
                © Academlo 2022
            </h5>
            <div className='icon-container'>
                <a 
                href="https://www.instagram.com/academlohq/" 
                target="_blank"
                className='a-decoration'
                >
                    <div className='icon-circle'>
                        <i className='bx bxl-instagram-alt icon-size'></i>
                    </div>
                </a>
                <a 
                href="https://www.linkedin.com/in/andresrbaez/" 
                target="_blank"
                className='a-decoration'
                >
                    <div className='icon-circle'>
                            <i className='bx bxl-linkedin icon-size'></i>
                    </div>
                </a>
                <a 
                href="https://www.youtube.com/c/academlo" 
                target="_blank"
                className='a-decoration'
                >
                    <div className='icon-circle'>
                        <i className='bx bxl-youtube icon-size'></i>
                    </div>
                </a>
            </div>
        </div>
    </footer>

    );
};

export default Footer;
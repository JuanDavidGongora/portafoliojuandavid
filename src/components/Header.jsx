import React from 'react';
import personalImg from '../images/personal.png'


const Header = () => {
    return (
        <div className='container header'>
            <div className='headerCenter'>
                <div className='imgHeader'>
                    <img src={personalImg} className="imgHeaderCircle" />
                </div>
                <div>
                    <h1>Frontend Developer</h1>
                </div>
                <div>
                    <h5>
                        Description
                    </h5>
                </div>
            </div>
            
        </div>
    );
};

export default Header;
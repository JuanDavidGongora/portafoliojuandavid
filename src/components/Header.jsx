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
                    <h1>Desarrollador Front End</h1>
                </div>
                <div>
                    <h5 style={{position: "relative", zIndex: "99"}}>
                        Me encantan los retos y los videojuegos 🕹️
                    </h5>
                </div>
            </div>
            
        </div>
    );
};

export default Header;
import React from 'react';
import css from '../images/CSS.png'
import html from '../images/Html.png'
import javaScript from '../images/JavaScript.png'
import react from '../images/React.png'
import redux from '../images/Redux.png'
import gitHub from '../images/Github.png'
import reactRouter from '../images/reactRouter.png'


const Habilities = () => {
    return (
        <div className='aboutMe' id='s-tecnologies' style={{paddingTop: "4rem"}}>
            <div>
                <h1 className='h1'>
                    Tecnologías
                </h1>
            </div>
            <div className='tecnologies'>
                <div className='tecInfo'>
                    <img src={javaScript} className='imgHabilities'/>
                    <small>JavaScript</small>
                </div>
                <div className='tecInfo'>
                    <img src={html} className='imgHabilities'/>
                    <small>HTML</small>
                </div>
                <div className='tecInfo'>
                    <img src={css} className='imgHabilities'/>
                    <small>CSS</small>
                </div>
                <div className='tecInfo'>
                    <img src={react} className='imgHabilities'/>
                    <small>React</small>
                </div>
                <div className='tecInfo'>
                    <img src={redux} className='imgHabilities'/>
                    <small>Redux</small>
                </div>
                <div className='tecInfo'>
                    <img src={gitHub} className='imgHabilities github'/>
                    <small>GitHub</small>
                </div>
                <div className='tecInfo'>
                    <img src={reactRouter} className='imgHabilities'/>
                    <small>React Router</small>
                </div>
            </div>
            
        </div>
    );
};

export default Habilities;

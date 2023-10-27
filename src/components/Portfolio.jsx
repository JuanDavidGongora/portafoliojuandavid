import React from 'react';
import pokedex from '../images/pokedex.jpg'
import wiki from '../images/miniWiki.jpg'
import weather from '../images/weatherAPI.jpg'
import ecommerce from '../images/ecommerce.jpg'
import css from '../images/CSS.png'
import html from '../images/Html.png'
import javaScript from '../images/JavaScript.png'
import react from '../images/React.png'
import redux from '../images/Redux.png'
import reactRouter from '../images/reactRouter.png'
import bootstrap from '../images/Bootstrap.png'
import gitHub from '../images/Github.png'

const Portfolio = () => {
    return (
        <div className='aboutMe' id='s-portfolio' style={{ paddingTop: "4rem" }}>
            <div>
                <h1 className='h1'>
                    Portafolio
                </h1>
            </div>
            <div className='wrap'>
                <div className='boxPortfolio'>
                    <a href="https://pokedexdejuanda.netlify.app/#/" target="_blank">
                        <img src={pokedex} className='imgPortfolio' />
                        <div className='cap'>
                            <img src={react} className='imgHover' />
                            <img src={html} className='imgHover' />
                            <img src={css} className='imgHover' />
                            <img src={redux} className='imgHover' />
                            <p className='infoHover'>
                                <b>Pokedex</b>
                                Consulta la información detallada de tu pókemon favorito.
                            </p>
                        </div>
                    </a>
                </div>
                <div className='boxPortfolio'>
                    <a href="https://ecommercejuanda.netlify.app/" target="_blank">
                        <img src={ecommerce} className='imgPortfolio' />
                        <div className='cap'>
                            <img src={html} className='imgHover' />
                            <img src={css} className='imgHover' />  
                            <p className='infoHover'>
                                <b>Ecommerce</b>
                                 Rrealiza compras de merchandising de Academlo y coloca tu ecommerce, en Darkmode.
                            </p>
                        </div>
                    </a>
                </div>
                <div className='boxPortfolio'>
                    <a href="https://universorickjuanda.netlify.app/" target="_blank">
                        <img src={wiki} className='imgPortfolio' />
                        <div className='cap'>
                            <img src={react} className='imgHover' />
                            <img src={html} className='imgHover' />
                            <img src={css} className='imgHover' />
                            <p className='infoHover'>
                                <b>Rick & Morty's Wiki</b>
                                Encuentra todos los mundos y sus personajes.
                            </p>
                        </div>
                    </a>
                </div>
                <div className='boxPortfolio'>
                    <a href="https://appclimajuanda.netlify.app/" target="_blank">
                        <img src={weather} className='imgPortfolio' />
                        <div className='cap'>
                            <img src={react} className='imgHover' />
                            <img src={html} className='imgHover' />
                            <img src={css} className='imgHover' />
                            <p className='infoHover'>
                                <b>Weather App</b>
                                Consulta el clima en la ubicación que te encuentres.
                            </p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;

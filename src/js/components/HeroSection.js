import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../../style/HeroSection.css';


export const HeroSection = ({
    lightBg,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    imgStart,
    img,
    alt
}) => {

    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row"
                        style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}
                    >
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'subtitle' : 'subtitle dark'}>{description}</p>

                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <Link to='/sign-up'>
                                    <Button buttonSize='btn--wide' buttonColor={'blue'}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


import React from 'react';
import '../../style/Jumbotron10.css';
import { CarouselJumbotron10 } from './CarouselJumbotron10';
import { JumbotronData } from './data';



export const Jumbotron10 = ({
    lightBg,
}) => {

    return (
        <>
            <div className={lightBg ? ' home__Jumbotron-section' : ' home__Jumbotron-section darkBg'}>
                <CarouselJumbotron10 {...JumbotronData }/>
            </div>
        </>
    )
}


import React from 'react';
import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import Round from '../json/pyramid.json'

const Banner = () => {
    const container = useRef(null)

    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: Round
        })
    }, [])

    return (
        <div className="container-fluid banner-fix">
            <div style={{width: '70%'}} className="container" ref={container}></div>
        </div>
    );
};

export default Banner;
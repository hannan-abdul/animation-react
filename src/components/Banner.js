import React from 'react';
import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import Round from '../json/rotating-triangles.json'

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
        <div style={{width: '50%'}} className="container" ref={container}></div>
    );
};

export default Banner;
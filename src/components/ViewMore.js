import React from 'react';
import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import LeafBlow from '../json/leafs-blow.json'

const ViewMore = () => {
    const container = useRef(null)

    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: LeafBlow
        })
    }, [])
    return (
        <div className="container-fluid px-0">
            <div className="row">
                <div className="col-md-6 position-rel">
                    <div style={{ width: '150%' }} className="container px-0" ref={container}></div>
                    <button className="btn btn-fix">VIEW MORE</button>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    );
};

export default ViewMore;
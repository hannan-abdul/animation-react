import React from 'react';
import founder from '../images/author.jpg'

const AboutFounder = () => {
    return (
        <div className="container container-absolute">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img className="w-75" src={founder} alt="founder" />
                </div>
                <div className="col-md-6">
                    <h1>ABOUT FOUNDER</h1>
                    <p>A Connoisseur of all things luxurious and passionate about the business of luxury, Harsh Mann, has cultivated deep insights on evolving industry trends across the world.
                        And his in-depth knowledge and understanding of 25 different world cultures, make him a keen observer of new challenges, current movements and foresee the future trends of the indian luxury markets.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutFounder;
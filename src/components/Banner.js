import React from 'react';
import bannerImg from '../Images/banner1.jpg';

export const Banner = () => {
    return (
        <div className="main banner-section">
            <h1 className="banner-heading">PROMOTIONAL BANNER</h1>
            <div className="banner-container">
                <img 
                    src={bannerImg} 
                    alt="Fashion Collection 2026" 
                    className="banner-image" 
                />
                <div className="banner-caption">
                    <p className="banner-tag">SPECIAL PROMOTION</p>
                    <h2 className="banner-text">FASHION COLLECTION 2026</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;
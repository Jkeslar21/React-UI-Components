import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div className='CardContainer' onclick="window.location='https://www.reactjs.org';">
        <CardBanner />
        <CardContent />
        </div>
    )
}

export default CardContainer;
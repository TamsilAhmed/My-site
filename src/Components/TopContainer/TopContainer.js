import React from 'react';
import { Element } from 'react-scroll';
import TopContent from '../TopContent/TopContent';
import './TopContainer.css'
import ParticlesBack from '../Particles/ParticlesBack';
function TopContainer() {
    return (
        <Element name='about' className='topContainer'>
            <ParticlesBack />
            <TopContent />
        </Element>
    );
}

export default TopContainer;
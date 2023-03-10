import React from 'react';
import {Particles} from 'react-tsparticles';
import particleConfig from './particleConfig';

const ParticlesBack = () => {
    return (
        <Particles params = {particleConfig} ></Particles>
    );
}

export default ParticlesBack;
import React from 'react';
import "./SkillContainer.css";
import {Element} from "react-scroll"
import skillImg from "../../assets/skill.jpg"
import LinearProgress from '@mui/material/LinearProgress';

function SkillContainer() {
    return (
        <Element className='skillContainer' id='skills'>
            <div className='skillContainer__image'>
                <img src={skillImg} alt=" "></img>

            </div>
            <div className='skillContainer__text'>
                <h2>Skill Set</h2>
                <div className='skillContainer__skillSet'>
                    <h5>React</h5>
                    <div className='skillContainer__slider skillContainer__slider1'>
                        <LinearProgress variant="determinate" value={40}/>
                    </div>
                </div>
                <div className='skillContainer__skillSet'>
                    <h5>Java</h5>
                    <div className='skillContainer__slider skillContainer__slider2'>
                        <LinearProgress variant="determinate" value={75} />
                    </div>
                </div>
                <div className='skillContainer__skillSet'>
                    <h5>Spring Boot</h5>
                    <div className='skillContainer__slider skillContainer__slider3'>
                        <LinearProgress variant="determinate" value={70}/>
                    </div>
                </div>
                <div className='skillContainer__skillSet'>
                    <h5>Microservices</h5>
                    <div className='skillContainer__slider skillContainer__slider4'>
                        <LinearProgress variant="determinate" value={50}/>
                    </div>
                </div>
                <div className='skillContainer__skillSet'>
                    <h5>MySQL</h5>
                    <div className='skillContainer__slider skillContainer__slider5'>
                        <LinearProgress variant="determinate" value={80}/>
                    </div>
                </div>
                <div className='skillContainer__skillSet'>
                    <h5>Spring REST</h5>
                    <div className='skillContainer__slider skillContainer__slider6'>
                        <LinearProgress variant="determinate" value={70}/>
                    </div>
                </div>

            </div>
        </Element>
    );
}

export default SkillContainer;
import React from 'react';
import { Link } from 'react-scroll';
import './TopContent.css'
import cvUrl from '../../assets/Tamsil Ahmed.pdf';

function TopContent() {
    
    return (
        <div className='topContent'>
            <div className='topContent__container'>
                <h1>Tamsil Ahmed</h1>
                <p>A Software Tester</p>
                <a href={cvUrl} download = 'Resume.pdf'>
                    <button className='topContent__downloadButton'>Download CV</button>
                </a>
                <Link to='projects' smooth ={true} duration={500}>
                        <button className='topContent__workButton'>My Work</button>
                </Link>


            </div>

            
        </div>
    );
}

export default TopContent;
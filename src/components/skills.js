import React from 'react';
import './style/style.css';
import java from '../static/java.png'

const Skills = () => {
 // change all of the links to modals
 // find a better way to import all of the pics maybe make a seprate class to handle the images. 
    return (
        <div className="skill-block">
            <a href="https://www.google.com" target="blank"> 
                <img src={java}  alt="Java logo" className="logo" />
            </a>
            <span> block 1</span>
            <span> block 1</span>
        </div>
    )
}

export default Skills;
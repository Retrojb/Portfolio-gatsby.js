import React from 'react';
import './style/style.css';
import java from '../static/java.png'
import {Link} from 'gatsby';

const Skills = () => {

    return (
        <div className="skill-block">
            <a href="https://www.google.com">
                <img src={java}  alt="Java logo" className="logo" />
            </a>
            <span> block 1</span>
            <span> block 1</span>
        </div>
    )
}

export default Skills;
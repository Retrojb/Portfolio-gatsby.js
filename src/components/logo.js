import React from 'react';
import './style/style.css';
import java from '../static/java.png'
import angular from '../static/angular.png'
import html from '../static/html.png'
import kotlin from '../static/kotlin.jpeg'
import mongo from '../static/mongo.png'
import python from '../static/python.png'
import ktor from '../static/ktor.png'
import react from '../static/react.png'
import typescript from '../static/typescript.png'
import gatsby from '../static/gatsby.png'
import concourse from '../static/concourse.png'
import js from '../static/js-logo.png'

const Logo = () => {
    return (
        <div className="skill-block">
             <a href="https://www.google.com" target="blank"> 
                <img src={java}  alt="Java logo" className="logo" />
            </a>
            <a href="https://www.google.com" target="blank"> 
                <img src={angular}  alt="Java logo" className="logo" />
            </a>
            <a href="https://www.google.com" target="blank"> 
                <img src={typescript}  alt="Java logo" className="logo" />
            </a>
            <a href="https://www.google.com" target="blank"> 
                <img src={kotlin}  alt="Java logo" className="logo" />
            </a>
            <a href="https://www.google.com" target="blank"> 
                <img src={ktor}  alt="Java logo" className="logo" />
            </a>
            <a href="https://www.google.com" target="blank"> 
                <img src={react}  alt="Java logo" className="logo" />
            </a>
            <a href="https://www.google.com" target="blank"> 
                <img src={python}  alt="Java logo" className="logo" />
            </a>
            <a href="https://www.google.com" target="blank"> 
                <img src={mongo}  alt="Java logo" className="logo" />
            </a>
            <a href="https://www.google.com" target="blank"> 
                <img src={html}  alt="Java logo" className="logo" />
            </a>
            <a href="https://www.google.com" target="blank"> 
                <img src={js}  alt="Java logo" className="logo" />
            </a>
            <a href="https://www.google.com" target="blank"> 
                <img src={gatsby}  alt="Java logo" className="logo" />
            </a>
            <a href="https://www.google.com" target="blank"> 
                <img src={concourse}  alt="Java logo" className="logo" />
            </a>
        </div>
    );
}

export default Logo;
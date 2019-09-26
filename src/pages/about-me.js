import React from 'react';
import Header from '../components/header';
import { Link } from "gatsby"

const AboutMe = () => {
    return (
        <div>
            <Header siteTitle="About Me" />
            <Link href="/">Home</Link>
        <h2>About Me</h2>
    <div>
        <h4>My name is John Baltes</h4>
        <p>I am a software developer from Columbus Ohio. I started my career as a developer in 2018 and have loved every moment since I started
        I currently work for Nationwide Insurance, experience includes Mobile development and fullstack work.
        </p>
    </div>
    </div>
);
    

}
export default AboutMe;
import React from 'react';
import './style/style.module.css';
import Container from './container';
import Users from './user';

const IndexBody = () => {
    return ( 
    <div className="index-body"> 
            <Name />
            <Users />
            <ContactInfo />
            <Container><h1>HI</h1></Container>
    </div>
    );

}
const Name = () => {
    return (
        <div className="name-card">
            <h2>John Baltes</h2>
        </div>
    );
}

const ContactInfo = () => {
//comeback to download resume file
    return(
    <div className="contact">
        <a href="baltescartography@gmail.com"> Email Me</a>
        <a href="https://github.com/retrojb" target="blank">Check out my Github  ✓</a>
        <a href="https://linkedIn.com" target="blank"> LinkedIn  ✓</a>
        <a href="/static/resume.pdf" download="Resume.pdf">Resume</a>
    </div>
    )
}

export default IndexBody


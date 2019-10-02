import React from 'react';
import './style/style.css';
import Logo from './logo';

const IndexBody = () => {
    return ( 
    <div className="index-body"> 
            <Name />
            <ContactInfo />
            <Logo />  
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
        <email href="baltescartography@gmail.com"> Email Me</email>
        <a href="https://github.com/retrojb" target="blank">Check out my Github</a>
        <a href="https://linkedIn.com" target="blank"> LinkedIn</a>
        <a href="/static/resume.pdf" download="Resume.pdf">Resume</a>
    </div>
    )
}

export default IndexBody;


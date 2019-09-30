import React from 'react';
import './style/style.css';
import Skills from './skills';
import resume from '../static/John_Baltes_Resume.pdf';

let name = "John Baltes"
const IndexBody = () => {
    return ( 
    <div className="index-body"> 
            <Name />
            <ContactInfo />
            <Skills />  
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

    return(
    <div className="contact">
        <email href="baltescartography@gmail.com"> Email Me</email>
        <a href="https://github.com/retrojb" target="blank">Check out my Github</a>
        <a href="https://linkedIn.com" target="blank"> LinkedIn</a>
        <button onClick={downloadResume('John resume', resume)}>Resume</button>
    </div>
    )
}

export default IndexBody;

function downloadResume(text, resume) {
    var ele = document.createElement('a');
    ele.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text));
    ele.setAttribute('download', resume);
    document.body.appendChild(ele);
    ele.click();
    document.body.removeChild(ele);
}
document.getElementsByTagName('button').addEventListner("click", function(){
    downloadResume(resume, 'Resume')
})

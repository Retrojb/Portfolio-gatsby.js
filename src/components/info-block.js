import React from 'react';
import './style/style.css';


const InfoBlock = ({data}) => {
     function get() {
         const email = "baltescartography@gmail.com";
     } 
    return (
        <div className="contact">
            <h2>John Baltes</h2>
            <span>
                <div>
                    <i src="./images/cool-guy.jpg" />
                </div>
                <a>Github</a>
                <a>Email me</a>
                <a href="https://www.linkedin.com/in/john-baltes/">LinkedIn</a>
            </span>
        </div>
    );
}

export default InfoBlock;
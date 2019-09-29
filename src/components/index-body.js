import React from 'react';
import './style/style.css';
import InfoBlock from './info-block';
import Skills from './skills';

const IndexBody = () => {
    return ( 
    <div className="index-body"> 
            <InfoBlock />
            <Skills />  
    </div>
    );

}

export default IndexBody;
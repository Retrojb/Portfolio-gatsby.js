import React from 'react';
import Navigation from './navigation';
import './style/style.css';
import './style/layout.css';

const Footer = () => {

    return (
    <div className="container">
         <footer>
        <Navigation>
        </Navigation>
          {new Date().getFullYear()}
        </footer>
    </div>
    )
}

export default Footer;
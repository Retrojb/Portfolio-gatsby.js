import React from 'react';
import Navigation from './navigation';

const Footer = () => {

    return (
    <div className="container">
         <footer>
             <Navigation>
          {new Date().getFullYear()}
        </Navigation>
        </footer>
    </div>
    )
}

export default Footer;
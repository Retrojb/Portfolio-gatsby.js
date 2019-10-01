import React from 'react';
import { Link } from "gatsby"

const Navigation = () => {
    return (
        <div className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/about-me">About Retrojb</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/blog">Blog</Link>  
        </div>
    );
}

export default Navigation;
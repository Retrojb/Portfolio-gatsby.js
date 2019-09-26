import React from 'react';
import { Link } from "gatsby"
import "./style.css";


const Navigation = () => {
    return (
        <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/about-me">About Retrojb</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/blog">Blog</Link>
        </nav>
    );
}

export default Navigation;
import React from 'react';
import { Link } from "gatsby"
import style from "./style/style.css";


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
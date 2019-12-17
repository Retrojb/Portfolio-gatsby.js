import React from 'react';
import containerStyles from './style/style.module.css';

export default ({ children }) => {
    return (
        <div className={containerStyles.container}>{ children }</div>
    )
}
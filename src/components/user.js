import React from 'react';
import styles from './style/style.module.css';
import Container from './container';

const User = props => (
    <div className={styles.user}>
      <img src={props.avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )
  export default () => (
    <Container className="user-info">
      <User
        
        username="John Baltes"
        avatar="../static/cool-guy.jpg"
        excerpt="Welcome to my portfolio. Currently I work as a application developer at Nationwide Insurance in Columbus, Oh"
      />
    </Container>
  )
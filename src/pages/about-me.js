import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
// import { graphql } from 'gatsby';

const AboutMe = () => {
    return (
        <div>
            <Header siteTitle="About Me" />
        <div>
        
        <p>I am a software developer from Columbus Ohio. I started my career as a developer in 2018 and have loved every moment since I started
        I currently work for Nationwide Insurance, experience includes Mobile development and fullstack work.
        </p>
       
    </div>
    <Footer />
    </div>
);
    } 
// export const query = graphql`
// query MyQuery {
//     allFile {
//       edges {
//         node {
//           id
//           name
//           accessTime
//           birthTime
//           dev
//           dir
//           root
//           relativePath
//         }
//       }
//     }
//   }
// `

export default AboutMe;
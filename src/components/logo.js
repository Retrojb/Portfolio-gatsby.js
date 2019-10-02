import React from 'react';
import './style/style.css';
import { StaticQuery, graphql } from 'gatsby';

const Logo = ({ children }) => (
    <StaticQuery query={ graphql`
        query LogoQuery {
            allLogoJson {
                edges {
                    node {
                        id
                        imgSrc {
                            dir
                            relativePath
                        }
                    }
                }
              }
            }
        `}
        render={ data =>(
            <div className="foo-bar">
                <ul> {getLogos(data)}</ul>    
            </div>
        )}
        
    ></StaticQuery>
)

function getLogos(data) {
    const logoArray = [];
    data.allLogoJson.edges.forEach( item => {
        logoArray.push(<li key={item.node.id}>{item.node.id}
        </li>)
        const test = item.node.dir + item.node.imgSrc
        JSON.stringify(test);
        console.log('fuck', test)
        console.log('foo', item.node.imgSrc)
        return logoArray;
    });
    
} 
export default Logo
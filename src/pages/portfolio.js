import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Layout from "../components/layout";

const Portfolio = () => (

<Layout>
    <StaticQuery query={ graphql`
        query ExperienceQuery {
          allExperienceJson {
            edges {
              node {
                company
                position
                from
                to
                items {
                  tech
                  label
                  side
                }
              }
            }
          }
        }
      `}
      render={ data => (
        <>
          <ul alt="experience">{getExperienceName(data)}</ul>
        </>
          )} ></StaticQuery>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

function getExperienceName(data) {
  const experienceArray = [];
  data.allExperienceJson.edges.forEach(item => 
    experienceArray.push(<li key={item.node.company}>
                      {item.node.company}<br/>
                      Position: {item.node.position}<br/>
                      From: {item.node.from}<br/>
                      To: {item.node.to}<br/>
                      </li>));
    return experienceArray;
}

export default Portfolio

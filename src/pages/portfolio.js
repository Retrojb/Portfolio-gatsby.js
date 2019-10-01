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
          <h1>{getExperienceName(data)}</h1>
        </>
          )} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


function getExperienceName(data) {
  const experienceArray = [];
  data.allExperienceJson.edges.forEach(item => 
    experienceArray.push(<h2 key={item.node.company} color="orange"></h2>))
}

export default Portfolio

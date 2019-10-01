import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";

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
    experienceArray.push(<li key={item.node.company} color="orange">{item.node.company}</li>));
    return experienceArray;
}

export default Portfolio

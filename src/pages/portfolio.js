import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

const Portfolio = ({ data }) => (
  <Layout>
    <h3>portfolio page</h3>
    <h1>{data.experience.company}</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export default Portfolio

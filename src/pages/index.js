import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import IndexBody from "../components/index-body"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexBody />
    <Footer />
  </Layout>
)

export default IndexPage

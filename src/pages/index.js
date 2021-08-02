import React from "react"

import Layout from "../components/Basics/Layout"
import SEO from "../components/Basics/seo"
import Generator from "../components/Generator/GeneratorMain"

const IndexPage = () => (
  <Layout>
    <SEO title="Wavy Page Transitions" />
    <Generator />
  </Layout>
)

export default IndexPage

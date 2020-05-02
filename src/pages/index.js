import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Basics/Layout"
// import Image from "../components/image"
import SEO from "../components/Basics/seo"
import Generator from "../components/Generator/GeneratorMain"

const IndexPage = () => (
  <Layout>
    <SEO title="Wavvvy Header" />
    <Generator />
  </Layout>
)

export default IndexPage

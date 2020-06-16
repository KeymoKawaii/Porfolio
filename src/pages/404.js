import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page introuvable...</h1>
    <p>Désolé mais cette page n'existe pas</p>
  </Layout>
)

export default NotFoundPage

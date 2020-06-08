import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "animate.css/animate.min.css";
import '../components/Style.css';

import Propos from './Section/Apropos';
import Formation from "./Section/Formation";
import ExpPro from './Section/ExpPro';
import Projet from "./Section/Projet";

const IndexPage = (data) => (
  <Layout>
    <SEO title="Home" />

    <div className="Accueil">
      <h1>Paolo Trapu</h1>
      <hr/>
      <h2>Développeur Web</h2>
    </div>

    <Propos />
    <Formation/>
    <ExpPro />
    <Projet />
  </Layout>
)

export default IndexPage


// export const query = graphql`
//   query MyQuery{
//     allStrapiArticle{
//       nodes{
//         title
//         content
//         image{
//           publicURL
//         }
//       }
//     }
//   }
//   `
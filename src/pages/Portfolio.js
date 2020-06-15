import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GatsbyStrapi from "../images/gatsbystrapi.png"
import Netlify from '../images/Netlify.svg'
import Gatsby from "../images/Gatsby.svg"
import Heroku from "../images/heroku.svg"
import Strapi from "../images/strapi.svg"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <section className="PointProjet PartBlanc">
    <h3>Ce Portfolio</h3>
    <hr />
    <img src={GatsbyStrapi} alt=""/>
    <div>
      <div className="paragraphe">
        <p>Pour ce portfolio mon objectif est d'apprendre à maitriser les outils de déploiement continu, je connais déjà Netlify mais apprendre à utiliser Heroku sera un plus. <br/>
        Pour ce qui est du reste, je continue à utiliser Gatsby pour profiter des avantages de React, de la stabilité d'un site statique et de GraphQL qui permettra de récupérer tout se dont
        j'ai besoin via mon HeadlessCMS, Strapi !</p>
      </div>
      <div>
        <ul>
          <li><span>Stack technique :</span></li>
          <li>Gatsby<img src={Gatsby}/></li>
          <li>Strapi<img src={Strapi}/></li>
          <li>Netlify<img src={Netlify}/></li>
          <li>Heroku<img src={Heroku}/></li>
        </ul>
      </div>
    </div>
    </section>
  </Layout>
)

export default Portfolio
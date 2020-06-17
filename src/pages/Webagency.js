import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Webagency from "../images/webacademy.png"
import html from "../images/html.svg"
import css from "../images/css.svg"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <section className="PointProjet PartBlanc">
    <h3>Ce Portfolio</h3>
    <hr />
    <img src={Webagency} alt=""/>
    <div>
      <div className="paragraphe">
        <p>Mon premier projet en développement web ! <br />
        Réalisé exclusivement en HTML et CSS, l'objectif était de réaliser l'intégration de la maquette d'une agence web imaginaire. <br />
        J'ai redécouvert ce projet que très récemment, c'est plutôt agréable de pouvoir voir son évolution technique au fil du temps. <br /><br />
        <a href="https://webagency-paolo-trapu.netlify.app/">Webagency</a></p>
      </div>
      <div>
        <ul>
          <li><span>Stack technique :</span></li>
          <li>HTML<img src={html}/></li>
          <li>CSS<img src={css}/></li>
        </ul>
      </div>
    </div>
    </section>
  </Layout>
)

export default Portfolio
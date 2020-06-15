import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
    <section className="PartBlanc Contact">
    <SEO title="Contact" />
    <h3>Contactez-moi</h3>
    <hr />
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Votre Nom: <input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Votre Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Envoyer</button>
      </p>
  </form>
    </section>
)

export default About
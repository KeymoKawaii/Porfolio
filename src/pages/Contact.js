import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
    <section className="PartBlanc Contact">
      <SEO title="Contact" />
      <h3>Contactez-moi</h3>
      <hr />
      {/* <form name="send-place" method="POST" enctype="multipart/form-data"  data-netlify="true">
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
      </form> */}
      - <form method="post" action="#">
+ <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
+   <input type="hidden" name="bot-field" />
+   <input type="hidden" name="form-name" value="contact" />
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
      </form>
    </section>
)

export default About
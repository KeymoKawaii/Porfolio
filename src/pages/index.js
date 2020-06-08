import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "animate.css/animate.min.css";
import '../components/Style.css';

import Propos from './Section/Apropos';
import Formation from "./Section/Formation";
import ExpPro from './Section/ExpPro';
import Projet from "./Section/Projet";

// import Alert from './../Tools/Alert';

export default class Index extends React.Component{
  componentDidMount() {
    alert("Dû au Covid ce site à du être mit en ligne le plus vite possible, n'hésitez pas à venir dans les jours à venir pour voir les futures évolutions !")
  }

  render(){
      return(
        <Layout>
        <SEO title="Développeur Web" />
    
        {/* <Alert /> */}
    
        <div className="Accueil">
          <h1>Paolo Trapu</h1>
          <hr/>
          <h2>Développeur Web</h2>
        </div>
    
        <Propos />
        <Formation/>
        {/* <ExpPro />
        <Projet /> */}
      </Layout>
      )
  }
}

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
import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";
import {ReactMarkdown} from "react-markdown";

import Layout from "../components/layout"
import SEO from "../components/seo"
import "animate.css/animate.min.css";
import '../components/Style.css';

import Propos from './Section/Apropos';
import Formation from "./Section/Formation";
import ExpPro from './Section/ExpPro';
import Projet from "./Section/Projet";

// import Alert from './../Tools/Alert';
import About from './Contact';

export default class Index extends React.Component{
  render(){
      return(
        <Layout>
        <SEO title="Développeur Web" />
    
        <div className="Accueil">
          <h1>Paolo Trapu</h1>
          <hr/>
          <h2>Développeur Web</h2>
        </div>
    
        <Propos />
        <Formation/>
        <ExpPro />
        <Projet />
        <About />
        
      </Layout>
      )
  }
}
import React from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import Dewan from '../images/DewanDev.png'

export default class BullesProjet extends React.Component{
    render(){
        return(
            <ScrollAnimation className="PartBlanc"
            animateIn='fadeIn'>
                <h3>{this.props.title}</h3>
                <p><span>{this.props.entreprise}</span></p>
                <p>{this.props.description}</p>
                <AnchorLink to={this.props.Link}>Voir Plus</AnchorLink>
            </ScrollAnimation>
        )
    }
}
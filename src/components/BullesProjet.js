import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import Dewan from '../images/DewanDev.png'

export default class BullesProjet extends React.Component{
    render(){
        return(
            <Zoom>
                <div className="PartBlanc">
                    <h3>{this.props.title}</h3>
                    <p><span>{this.props.entreprise}</span></p>
                    <p>{this.props.description}</p>
                    <AnchorLink to={this.props.Link}>Voir Plus</AnchorLink>
                </div>
            </Zoom>
        )
    }
}
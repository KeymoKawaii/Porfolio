import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import {StaticQuery} from "gatsby";

import LogoBlanc from "../images/Logoblanc.png"

export default class Navigation extends React.Component {
    render(){
        return(
            <nav className="ColorDark">
                <div>
                    <AnchorLink to="/"><img src={LogoBlanc} alt="Logo Keymo blanc"/></AnchorLink>
                </div>
                
                <div>
                    <ul>
                    <AnchorLink to="/#Propos">Accueil</AnchorLink>
                    <AnchorLink to="/#Formation">Formation</AnchorLink>
                    <AnchorLink to="/#Projet">Projet</AnchorLink>
                    <AnchorLink to="/#Contact">Contact</AnchorLink>
                    </ul>
                </div>
            </nav>
        )
    }
}
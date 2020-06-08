import React from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Logonoir from '../../images/Logonoir.png';
import BullesProjet from './../../components/BullesProjet';

export default class Projet extends React.Component{
    render(){
        return(
            <section className="Projet PartNoir" id="Projet">
                <h2>Mes Projet</h2>
                <hr/>

                <BullesProjet
                title="title"
                entreprise="Description"
                description="description2"
                Link="Contact"/>

            </section>
        )
    }
}
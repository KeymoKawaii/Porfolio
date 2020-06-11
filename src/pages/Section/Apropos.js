import React from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Logonoir from '../../images/Logonoir.png';

export default class Propos extends React.Component{
    render(){
        return(
            <section className="Propos PartBlanc" id="Propos">
                <h2>À propos de moi</h2>
                <hr/>

                <div>
                    <ScrollAnimation className="imgLogo" animateIn='bounceInRight'
                        animateOut='bounceOutLeft'>
                    <img src={Logonoir} alt="Logo Keymo Noir" />
                    </ScrollAnimation>
                <p>
                    Je m'appelle Paolo Trapu, j'ai 20 ans, suite à l'obtention de mon bac STI2D (option: SIN) j'ai passé quelques temps à monter mon projet professionnel via plusieurs actions
                    (Service civique, formations,...)
                    <br/>
                    Après une formation de développeur d’application hybride (React) dans le but d’avoir une première réelle formation dans le 
                    développement informatique, je souhaite entreprendre une alternance dans le but de consolider mes compétences.
                    <br/>
                    Je suis passionné par l'informatique depuis plusieurs années maintenant, j'espère pouvoir monter en compétences grâce à une veille permanente et une entreprise qui me
                    permettra de m'améliorer avec mes futurs collaborateurs.
                </p>
                </div>
            </section>
        )
    }
}
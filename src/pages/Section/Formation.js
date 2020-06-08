import React from 'react';

import BullesFormation from '../../components/BullesFormation';

export default class Formation extends React.Component{
    render(){
        return(
            <section className="Formation PartNoir" id="Formation">
                <h2>Mes Formations</h2>
                <hr/>

                    <BullesFormation 
                    title="Formation développeur d'application hybride, Buroscope"
                    date="Septembre 2019 à Février 2020 (6 mois)"
                    description="Création d'application sur React et ReactNative, création de thème custom sur Wordpress"
                    />

                    <BullesFormation 
                    title="Formation Développeur Web Junior, Openclassrooms"
                    date="Avril à Juillet 2018 (3 mois)"
                    description="Formation en ligne sur HTML/CSS et Wordpress"
                    />

                    <BullesFormation 
                    title="Bac STI2D option: Système d'information numérique (SIN)"
                    date="Obtention en Juillet 2017"
                    />
                    
            </section>
        )
    }
}
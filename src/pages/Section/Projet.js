import React from 'react';
// import { StaticQuery } from 'gatsby';
import BullesProjet from './../../components/BullesProjet';
import Dewan from '../../images/DewanDev.png'

export default class Projet extends React.Component{
    render(){
        return(
            <section className="Projet PartNoir" id="Projet">
                <h2>Mes Projet</h2>
                <hr/>

                {/* <StaticQuery
                    query={graphql`
                    query {
                        allStrapiArticles {
                        edges {
                            node {
                            strapiId
                            title
                            Content
                            slider{
                                url
                            }
                            }
                        }
                        }
                    }
                    `}
                    render={data =>
                    data.allStrapiArticles.edges.map((edges, i) => {
                    return (
                        <div key={edges.node.strapiId}>
                        <h3 href={`/node/${edges.node.strapiId}`}>
                            {edges.node.title}
                        </h3>
                        <hr />
                        <p>{edges.node.Content}</p>
                        <img src={edges.node.slider.url} alt="" />
                        </div>
                    )
                    })}
                    /> */}
                    <div>                    
                        <BullesProjet 
                        title="Site de Dewan Développement"
                        entreprise="Dewan Développement"
                        description="Création du site web de Dewan Développement en accord avec les besoins de la startup."
                        Link="DewanDev"/>

                        <BullesProjet 
                        title="Affiche pour We Ker"
                        entreprise="We Ker"
                        description="Création d'une affiche pour la permanence du Blosne de We Ker"
                        Link="WeKer"/>

                        <BullesProjet 
                        title="Ce Portfolio !"
                        entreprise="Projet Personnel"
                        description="Car un portfolio c'est déjà un projet en soit !"
                        Link="Portfolio"/>
                    </div>

            </section>
        )
    }
}
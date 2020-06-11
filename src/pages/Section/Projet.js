import React from 'react';
import "animate.css/animate.min.css";
import { StaticQuery } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import Logonoir from '../../images/Logonoir.png';
import BullesProjet from './../../components/BullesProjet';


export default class Projet extends React.Component{
    render(){
        return(
            <section className="Projet PartNoir" id="Projet">
                <h2>Mes Projet</h2>
                <hr/>

                <StaticQuery
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
                    />

            </section>
        )
    }
}
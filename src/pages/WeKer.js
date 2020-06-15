import React from 'react';
import "animate.css/animate.min.css";
import Layout from '../components/layout';

import WE from '../images/Affiche_blosne.png'
import Illustrator from '../images/illustrator.svg'
import InDesign from '../images/Indesign.svg'
import SEO from './../components/seo';

const VarWeKer = () =>(
            <Layout>
                <SEO title="Affiche de We Ker" />
                <section className="PointProjet PartBlanc">
                    <h2>We Ker</h2>
                    <hr/>

                    <img src={WE} alt="Site web Dewan Développement"/>
                    <div>
                        <div className="paragraphe">
                            <p>Affiche de la permanence du Blosne<br/>
                            Affiche créé pour la permanence du Blosne de We Ker, le but était d'y présenter les différents horaires démarches et objectifs de la mesure.
                            </p>
                        </div>
                        <div>
                            <ul>
                                <li><span>Stack technique :</span></li>
                                <li>Adobe InDesign<img src={InDesign}/></li>
                                <li>Adobe Illustrator<img src={Illustrator}/></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Layout>
    )

export default VarWeKer;
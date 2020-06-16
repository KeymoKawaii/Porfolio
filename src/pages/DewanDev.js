import React from 'react';
import Layout from '../components/layout';

import Dewan from '../images/DewanDev.png'
import Netlify from '../images/Netlify.svg'
import Gatsby from "../images/Gatsby.svg"
import SEO from '../components/seo';

const DewanDev = () => (
            <Layout>
                <SEO title="Dewan Développement" />
                <section className="PointProjet PartBlanc">
                    <h2>Dewan Développement</h2>
                    <hr/>

                    <img src={Dewan} alt="Site web Dewan Développement"/>
                    <div>
                        <div className="paragraphe">
                            <p>Projet du site web de Dewan Développement.<br/>
                            Site web développé en 2 projets, une première fois avec React (Gatsby) et une seconde fois avec un WordPress qui permet une modification du contenu sans développeur,
                            ce qui est plus en accord avec les impératifs d'une startup. <br /><br />
                            <a href="https://dewandev.com" target="blank">Site de Dewan Dev</a>
                            </p>
                        </div>

                        <div>
                        <ul>
                            <li><span>Stack technique :</span></li>
                            <li>React (Gatsby)<img src={Gatsby}/></li>
                            <li>Netlify<img src={Netlify}/></li>
                        </ul>
                    
                        </div>
                    </div>
                </section>
            </Layout>
        )

export default DewanDev;
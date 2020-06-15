import React , {Fragment} from 'react';

import Dewan from '../../components/RootingExpPro/Dewan';
import SWeker from '../../components/RootingExpPro/SWeker';
import SCWeker from '../../components/RootingExpPro/SCWeker';

export default class ExpPro extends React.Component{
        constructor(props) {
          super(props);
          this.state = {
            list: "Dewan"
          };
      
          // This binding is necessary to make `this` work in the callback
          this.changeDewan = this.changeDewan.bind(this);
          this.changeWeKerStage = this.changeWeKerStage.bind(this);
          this.changeWeKerServiceCiv = this.changeWeKerServiceCiv.bind(this);
        }
      
        changeDewan = () => {
          this.setState({ 
            list: "Dewan"
        });
       };
    
        changeWeKerStage = () => {
          this.setState({ 
            list: "WekerStage"
          });
        };
    
        changeWeKerServiceCiv = () => {
          this.setState({ 
            list: "WekerServiceCiv"
          });
        };
    
       render() {
        let status; 
        if (this.state.list === "Dewan") {
          status = <Dewan/>;
        } else if (this.state.list === "WekerStage") {
          status =<SWeker/>;
        }else if (this.state.list === "WekerServiceCiv") {
          status = <SCWeker/>;
        }
    
           return (
            <section className="PartBlanc">
                <h2>Mes Expériences Professionnelles</h2>
                <hr />
            <div className="ExpPro">   
                <div className="Nav">
                    <button onClick={this.changeDewan} className="emo">Dewan Développement</button>
                    <button onClick={this.changeWeKerStage} className="sociale">Stage à We Ker</button>
                    <button onClick={this.changeWeKerServiceCiv} className="changement">Service Civique à We Ker</button>
                </div>
        
                <div className="ExpProText">
                    {status}
                </div>
            </div>
            </section>
            )
       }
      }
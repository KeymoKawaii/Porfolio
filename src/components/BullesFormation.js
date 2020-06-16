import React from 'react';
import Fade from 'react-reveal/Fade';


export default class BullesFormation extends React.Component{
    render(){
        return(
            <Fade>
                <div className="PartBlanc BullesFormation">
                <h3>{this.props.title}</h3>
                    <hr />
                    <p><span>{this.props.date}</span></p>
                    <p>{this.props.description}</p>
                </div>
                </Fade>
        )
    }
}
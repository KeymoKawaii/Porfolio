import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


export default class BullesFormation extends React.Component{
    render(){
        return(
            <ScrollAnimation className="PartBlanc BullesFormation"
            animateIn='fadeIn'>
                <h3>{this.props.title}</h3>
                <hR />
                <p><span>{this.props.date}</span></p>
                <p>{this.props.description}</p>
                </ScrollAnimation>
        )
    }
}
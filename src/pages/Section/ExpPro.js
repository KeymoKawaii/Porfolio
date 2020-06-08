import React from 'react';

export default class ExpPro extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          value: 4
        };
        this.MoreValue = this.MoreValue.bind(this);
        this.LessValue = this.LessValue.bind(this);
    }
    
    MoreValue = () =>{
        if(this.state.value > 3){
            this.setState = {
                value: 0
              };
        }else{
            this.state = {
                value: +1
              };
        }
    }
    
    LessValue = () =>{
        if(this.state.value < 0){
            this.setState.value = 3;
        }else{
            this.setState.value = -1;
        }
    }
    
    render(){
        return(
            <section className="ExpPro PartBlanc" id="ExpPro">
                <h2>Mes Expériences Professionnelle</h2>
                <hr/>

                
                <button onClick={this.MoreValue}>Plus</button>
                <button onClick={this.LessValue}>Moins</button>

                <p>{this.state.value}</p>
            </section>
        )
    }
}
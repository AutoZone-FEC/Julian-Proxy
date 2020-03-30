import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default class Fast extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }
    
    render(){
        return(
          
        <div className = "delivery">
           <div className = "deliverytext text"><img className = "ship" src="../Images/pirateshipthing.png"/>Need it Fast? Free NEXT DAY DELIVERY on Eligible Items. On orders over $35*.<span className="italic details link underline">See Details</span></div> 
        </div>
          
    )
  }
}
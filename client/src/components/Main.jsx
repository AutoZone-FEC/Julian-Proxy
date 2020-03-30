import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Star from './Star';
import Checkout from './Checkout';

export default class Main extends Component{
    constructor(props){
        super(props);

        this.state={
            product: "Bejewelled Steering Wheel"
        }
    }
    
    render(){
        return(
        <div className="mainarea">
           <div className = "breadcrumbs">
               <span className = "breadcrumb text link orange">Home </span>/
               <span className = "breadcrumb text link orange">Ships</span>/
               <span className = "breadcrumb text link orange">Boat Deck</span>/
               <span className = "breadcrumb text link orange">Weapons, Bowsprits, and Rudders</span>/
               <span className = "breadcrumb text link orange">Steers</span>/
               <span className = "breadcrumb text gray">{this.state.product}</span>
           </div>
           <h1 className = "text title">
            {this.state.product}
            </h1>
            <div>
            <div id="Image" className="image"></div>
            <div><img className = "padleft addvehicle" src="/Images/image.png"/></div>
            <div id='checkout'></div>
            <div><span className = "padleft part text gray bold">Part Number: <span className="light">112-358</span></span></div>
            <div><span className = "padleft part text gray bold">Alternate Part Number: <span className="light">P1R4T3</span></span></div>
            <div><span className = "padleft part text gray bold">Warranty: <span className="light orange link">Limited Lifetime</span></span></div>
            </div>
            <Star />
        </div>
    )
  }
}
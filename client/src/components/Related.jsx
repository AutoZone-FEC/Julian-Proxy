import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default class Related extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }
    
    render(){
        return(
            <div>
        <div id="related" className = "related"></div>
        <div id="related" className = "related"></div>
            </div>

    )
  }
}
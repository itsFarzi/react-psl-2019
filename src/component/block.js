import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;
import Fade from 'react-reveal/Fade';


const generateBlock=({blocks})=>{
    if(blocks){
        return blocks.map((item)=>{
            return(
                <Fade bottom  >
                <div className={`item  ${item.type}`}>
                     <div  className="image"  style={{background :`url(./images/blocks/${item.image})`}} >
                      <div className="veil">   </div> 
                      </div>
                     <div className="title" ><span>{item.title}</span></div>
                </div>
                
                </Fade>
            )
        })
    }
}
class Block extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="home-block" >
                {generateBlock(this.props)}
            </div>
        );
    }
}

export default Block;
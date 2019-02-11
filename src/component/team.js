import React, { Component } from 'react';

const URL = 'http://localhost:3004/teams'
class Team extends Component {
    constructor(){
        super();
        this.state={
            data : []
        }
    }
componentDidMount(){
    fetch(`${URL}?logo=${this.props.match.params.id}`,{method :'GET'})
    .then(res => res.json())
    .then( json =>{
        this.setState({data:json})
    })
}
genearateSquad=(squad)=>{
  return squad.map((item)=>{
        return( 
            <div key={item.name} className="item player-wrapper" >
                <img src={'/images/avatar.png'} />
                <h4>{item.name}</h4>
                <div className="node"><span>Number:</span>{item.number}</div>
                <div className="node"><span>PPG:</span>{item.PPG}</div>
                <div className="node"><span>RPG:</span>{item.RPG}</div>
                <div className="node"><span>APG:</span>{item.APG}</div>
            </div>
        )
  })
}
    genearateTeam=({data})=>{
       return data.map((item)=>{
           return( 
               <div key={item.id} className="team-data-wrapper">
                     <div className="left" >
                        <img  src={`/images/teams/${item.logo}.png`} />
                     </div>
                     <div className="right  " >
                     <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <div className="squad">
                          {this.genearateSquad(item.squad)}
                         </div> 
                     </div>
               </div>
           )
       })
    }
    render() {
        return (
            <div className="team-dat" >
                {this.genearateTeam(this.state)}
            </div>
        );
    }
}

export default Team;
import React, { Component } from 'react';
import {Link} from 'react-router-dom'


const  URL = "http://localhost:3004/teams"
class Teams extends Component {
    constructor(){
        super() ;
        this.state={
            teams : [] ,
            filtered : [] ,
            keyword : ""
        }
    }
componentDidMount(){
    fetch(URL , {method : 'GET'} )
    .then( res => res.json() )
    .then( json =>{
        this.setState({
            teams : json ,
            filtered : json
        })
    })
}
generateTeam=({filtered})=>{
       return filtered.map((item)=>{
           console.log(item.name)
           return (
               <div  className="teams-item" >
                     <Link  to={`/team/${item.logo}`} key={item.id}>
                 <img alt={item.name} src={`images/teams/${item.logo}.png`} />
               </Link>
               </div>
           )
       })
}
searchTeam=(e)=>{
   const keyword = e.target.value;
   if(keyword !== ""){
     const list = this.state.teams.filter((item)=>{
         return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
     })
     this.setState({
         filtered : list ,
         keyword 
     })
   }else{
       this.setState({
           filtered : this.state.teams ,
           keyword
       })
   }
}

    render() {
        return (
            <div className="team-component" >
                <div className="team-input" >
                    <input placeholder="search for your favorite team"
                    type="text"
                     valu={this.state.keyword} 
                     onChange={e => this.searchTeam(e)}/>
                </div>
                <div className="teams-container" >
                <span>{this.generateTeam(this.state)}</span>
                </div>
            </div>
        );
    }
}

export default Teams;

import React, { Component } from 'react';

const URL ="http://localhost:3004/teams"


class Poll extends Component {
    constructor(){
        super();
        this.state={
            poll : []
        }
    }

componentDidMount(){
        this.fetchPoll()
}
fetchPoll(){
    fetch( `${URL}?poll=true&_sort=count&_order=desc ` , {method: 'GET'} )
    .then( res => res.json() )
    .then( json =>{
          this.setState({ poll : json})
    })
}
addCount=(count , i)=>{
    fetch(`${URL}/${i}` , {
        method:'PATCH' ,
        headers:{
            'Accept' : 'application/json' ,
            'Content-Type' : 'application/json'
        } ,
        body:JSON.stringify({count:count + 1})
        })
    .then(() => {
        this.fetchPoll()
    })
}
     generatePoll(){
        const position = ["1st" , "2nd" , "3rd" , "4rth" , '5th' , "6th"]
     return this.state.poll.map((item , i)=>{
         return(
             <div key={item.id} className="poll-item"  >
              <img alt={item.name} src={`./images/teams/${item.logo}.png`}  onClick={()=>{this.addCount(item.count , item.id)}} />
              <h4>{position[i]}</h4>
              <div>{item.count} Votes</div>
             </div>
         )
     })
        
} 
    render() {
        return (
            <div className="home-poll">
                <h3>Who Will Be The Next Champion ?</h3>
                <div className="poll-container" >
                  {this.generatePoll()}
                </div>
            </div>
        );
    }
}

export default Poll;
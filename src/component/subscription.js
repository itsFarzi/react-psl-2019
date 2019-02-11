import React, { Component } from 'react';

class Subscription extends Component {
    constructor(){
        super();
        this.state={
            email : "" ,
            error  : false ,
            succes : false 
        }
    }
    clear=()=>{
        setTimeout(function(){
               this.setState({
                   error:false , succes : false
               })
        }.bind(this),2000)
    }
    savEmail=(email)=>{
      const URL = "http://localhost:3004/subcriptions"

      fetch(URL , {method : 'POST' , 
            headers:{
                'Accept' : 'application/json' ,
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email})
          })
          .then( res => res.json)
          .then(()=>{
              this.setState({
                  email : '' ,
                  succes : true 
              })
          })

    }
    changehandler=(e)=>{
        this.setState({
            email : e.target.value 
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let email = this.state.email ;
        let regex = /\S+@\S+\.\S+/ ;
        if( regex.test(email)){
         this.savEmail(email);
        }else{
         this.setState({ email:"" , error: true})
        }
      this.clear()
    }
    render() {
        return (
            <div  className="subs-panel">
                <h3>Subscribe To Us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input  
                        type="text"
                        placeholder="your@gmail.com"
                        value={this.state.email} 
                        onChange={this.changehandler}/>
                    </form>
                </div>
                <div  className={this.state.error ? "show-error" : "error"}
                >Incorect Email</div>
                <div  className={this.state.succes ? "show-succes" : "succes"}
                >Thank You . Have a goood day!</div>
                <small>
                 <b>Pakistan Super League</b> is a Twenty20 cricket league, founded in Lahore on 9 September 2015 with five teams and now comprises six teams. Instead of operating as an association of independently owned teams, the league is a single entity in which each franchise is owned and controlled by investors.
                    </small>
            </div>
        );
    }
}

export default Subscription;
import React, { Component } from 'react';
import Slides from './slider' ;
import Subscription from './subscription' ;
import Block from './block' ;
import Poll from './poll'


const URL = " http://localhost:3004/home"
class Home extends Component {
    constructor(){
        super();
        this.state={
            home : ''
        }
    }
    componentDidMount(){
        fetch(URL , {method:'GET'})
        .then(response => response.json())
        .then( json => {
            this.setState({
                home : json
            })
        })
    }
    render() {
        return (
            <div>
                <Slides slides={this.state.home.slider} />
                <Subscription />
                <Block blocks={this.state.home.blocks} />
                <Poll/>
            </div>
        );
    }
}

export default Home;
import React, { Component } from 'react'
import Card from './card'

export default class CardMaker extends Component {
    constructor(props){
        super(props);
        this.state={
            cards: []
        }
    }
    async componentDidMount(){
        const url = "https://finalspaceapi.com/api/v0/character/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({cards: data});
    }
  render() {
    const {cards} = this.state;
    return (
       <div>
           {cards.map(card => <h1>{<Card name={card.name} img={card.img_url} abilities={card.abilities} status={card.status}></Card>}</h1>)}
       </div>
       
    )
  }
}

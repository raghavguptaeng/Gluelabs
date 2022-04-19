import React, { Component } from 'react'
export default class Card extends Component {
    constructor(props){
        super(props);
        this.state={
            name:props.name,
            img:props.img,
            status:props.status,
            abilities:props.abilities,
        }
    }
  render() {
      const {abilities} = this.state;
    return (
        <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src={this.state.img} alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{this.state.status}</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{this.state.name}</h2>
                {/* {abilities.map(ability => <span key={ability} class="inline-block py-1 px-2 m-1 rounded bg-red-200 text-indigo-500 text-xs font-medium tracking-widest">{ability}</span>)}
                 */}
            </div>
        </div>
    )
  }
}

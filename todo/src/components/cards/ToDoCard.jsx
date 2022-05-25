import React, { Component } from 'react'

class ToDoCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:this.props.data.title,
            description:this.props.data.description,
        }
    }
    render() {
        return (
            <div>
               <div class={`card ${window.innerWidth>=600?'w-96':'w-64'} bg-primary m-5 text-primary-content`}>
                    <div class="card-body">
                        <h2 class="card-title">{this.state.title}</h2>
                        <p>{this.state.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ToDoCard;
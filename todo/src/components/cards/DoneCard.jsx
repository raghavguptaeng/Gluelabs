import React, { Component } from 'react'

class DoneCard extends Component {
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
                <div class={`card ${window.innerWidth>=500?'w-96':'w-64'} bg-green-500 m-5 text-primary-content`}>
                <div class="card-body">
                        <h2 class="card-title">{this.state.title}</h2>
                        <p>{this.state.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default DoneCard;
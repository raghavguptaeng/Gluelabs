import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd';

class DoingCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:this.props.data.title,
            description:this.props.data.description,
            id:this.props.data.id,
            index:this.props.index,
        }
    }
    render() {
        return (
            <Draggable draggableId={this.state.id.toString()} index={this.state.index}>
            {
                (provided) => (
                    <div className="drag" ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div>
                            <div class={`card ${window.innerWidth>=500?'w-96':'w-64'} bg-secondary m-5 text-primary-content`}>
                                <div class="card-body">
                                    <h2 class="card-title">{this.state.title}</h2>
                                    <p>{this.state.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            </Draggable>
        )
    }
}
export default DoingCard;

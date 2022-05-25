import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import DoneCard from './cards/DoneCard';
import TaskAddButton from './TaskAddButton';

export default class Done extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        }
    }
    render() {
        return (
            <div className='DoneList'>
                <div className="containerForCards">
                <div className="topRow m-5">
                    <h1>Done</h1>
                </div>
                <Droppable droppableId='done'>
                {
                    (provided) => (
                        <div ref={provided.innerRef} className="drop" {...provided.droppableProps}>
                            {
                                this.state.data.map((item, index) => {
                                    return (
                                        <DoneCard key={index} index={index} data={item} />
                                    );
                                })
                            }
                        </div>
                    )
                }
                </Droppable>
                <TaskAddButton />
                </div>
            </div>
        )
    }
}

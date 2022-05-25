import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import DoingCard from './cards/DoingCard';
import TaskAddButton from './TaskAddButton';

export default class Doing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
        }
    }
    render() {
        return (
        <div>
            <div className='DoingList'>
                    <div className="containerForCards">
                    <div className="topRow m-5">
                        <h1>Doing</h1>
                    </div>
                    <Droppable droppableId='doing'>
                    {
                        (provided) => (
                            <div ref={provided.innerRef} className="drop" {...provided.droppableProps}>
                                {
                                    this.state.data.map((item, index) => {
                                        return (
                                            <DoingCard index={index}  key={index} data={item} />  
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
        </div>
        )
    }
}

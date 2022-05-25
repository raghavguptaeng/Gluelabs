import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import ToDoCard from './cards/ToDoCard';
import TaskAddButton from './TaskAddButton';


export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        }
    }
    render() {
        return (
            <div className='toDoList'>
                <div className="containerForCards">
                    <div className="topRow m-5">
                        <h1>To Do</h1>
                    </div>
                    <Droppable droppableId='toDo'>
                        {
                            (provided) => (

                                <div ref={provided.innerRef} className="dropArea" {...provided.droppableProps}>
                                    {
                                        this.state.data.map((item, index) => {
                                            return (
                                                <ToDoCard key={index} data={item} />
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

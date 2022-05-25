import React, { Component } from 'react'
import {GrAddCircle} from 'react-icons/gr';

class TaskAddButton extends Component {
    render() {
        return (
            <div>
                <div className={`addTask card m-5 ${window.innerWidth >= 500 ? 'w-96' : 'w-64'}`}>
                    <h1>Add Task</h1>
                    <GrAddCircle color='#fff' className='addIcon' />
                </div>
            </div>
        )
    }
}
export default TaskAddButton;

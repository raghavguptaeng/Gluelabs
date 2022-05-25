import React, { Component } from 'react'
import ToDoCard from './cards/ToDoCard';


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
                {
                    this.state.data.map((item, index) => {
                        return (
                            <ToDoCard key={index} data={item} />
                        );
                    })
                }
                </div>
            </div>
        )
    }
}

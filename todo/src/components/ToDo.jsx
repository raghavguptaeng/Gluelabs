import React, { Component } from 'react'
import DoingCard from './cards/DoingCard';
import DoneCard from './cards/DoneCard';
import ToDoCard from './cards/ToDoCard';

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:this.props.data
        }
    }
    render() {
        return (
        <div>
            <ToDoCard />
            <DoingCard />
            <DoneCard />
        </div>
        )
    }
}

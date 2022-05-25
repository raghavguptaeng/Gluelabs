import React, { Component } from 'react'
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
                    {
                        this.state.data.map((item, index) => {
                            return (
                                <DoingCard  key={index} data={item} />  
                            );
                        })
                    }
                    <TaskAddButton />
                    </div>
            </div>
        </div>
        )
    }
}

import React, { Component } from 'react'
import DoneCard from './cards/DoneCard';

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
                {
                    this.state.data.map((item, index) => {
                        return (
                            <DoneCard key={index} data={item} />
                        );
                    })
                }
                </div>
            </div>
        )
    }
}

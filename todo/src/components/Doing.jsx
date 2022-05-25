import React, { Component } from 'react'
import DoingCard from './cards/DoingCard';

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
            <div className='Doing'>
                    <div className="containerForCards">
                    {
                        this.state.data.map((item, index) => {
                            return (
                                <DoingCard  key={index} data={item} />  
                            );
                        })
                    }
                    </div>
            </div>
        </div>
        )
    }
}

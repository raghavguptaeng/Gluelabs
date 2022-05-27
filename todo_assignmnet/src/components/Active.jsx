import React, { Component } from 'react';
import tick from '../assets/check.png';

export default class Active extends Component {
    constructor(props) {
        super(props)
        this.state = {
            click: false
        }
    }

    handleClick = () => {
        this.setState({
            click: !this.state.click
        })
    }

    render() {
        return (
            <div className='card'>
                <div className="round">
                    {
                        (this.state.click==false)?<div className="toggle notClicked" onClick={this.handleClick}></div> : <div  onClick={this.handleClick} className="toggle Clicked">
                            <img src={tick} alt="tick" />
                        </div>
                    }
                </div>
                <h2 className={(this.state.click==false)?'txt active':'txt not-active'} >Active</h2>
            </div>
        )
    }
}

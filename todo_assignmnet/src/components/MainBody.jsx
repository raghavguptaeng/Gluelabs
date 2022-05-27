import React, { Component } from 'react'
import Active from './Active';

class MainBody extends Component {
    render() {
        return (
            <div className='mainBody'>
                <div className='mainBody__container'>
                    <div className='mainBody__container__title'>
                        <h1>todos</h1>
                    </div>
                    <div className="inputTodo">
                        <input type="text" placeholder="What needs to be done?" />
                    </div>
                    <div className="cards">
                        <Active />
                    </div>
                </div>
            </div>
        )
    }
}
export default MainBody;
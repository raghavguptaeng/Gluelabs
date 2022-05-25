import React, { Component } from 'react'
import ToDo from './ToDo';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo:[
                {
                    id:1,
                    title:'Learn React',
                    completed:false,
                    description:'loremlsdnvsl;nv;sdnfv;ndjsvfnsdk;n'
                },
                {
                    id:2,
                    title:'Learn Flutter',
                    completed:false,
                    description:'loremlsdnvsl;nv;sdnfv;ndjsvfnsdk;n'
                },
            ],
            doing:[],
            done:[],
        }
    }
    render() {
        return (
        <div>
            <ToDo data={this.state.todo} />
        </div>

        );
    }
}
export default HomePage;
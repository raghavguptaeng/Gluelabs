import React, { Component } from 'react'
import Doing from './Doing';
import Done from './Done';
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
                    description:'loremlsdnvsdvsjdnsdvnsldjas;ldnv;sajnvsl;nv;sdnfv;ndjsvfnsdk;n'
                },
                {
                    id:2,
                    title:'Learn Flutter',
                    completed:false,
                    description:'loremlsdnvsdvsjdnsdvnsldjas;ldnv;sajnvsl;nv;sdnfv;ndjsvfnsdk;n'
                },
            ],
            doing:[
                {
                    id:2,
                    title:'Learn Flutter',
                    completed:false,
                    description:'loremlsdnvsdvsjdnsdvnsldjas;ldnv;sajnvsl;nv;sdnfv; djsvfnsdk;n'
                },
            ],
            done:[
                {
                    id:2,
                    title:'Learn Flutter',
                    completed:false,
                    description:'loremlsdnvsdvsjdnsdvnsldjas;ldnv;sajnvsl;nv;sdnfv;ndjsvfnsdk;n'
                },
                {
                    id:3,
                    title:'Learn React',
                    completed:false,
                    description:'loremlsdnvsdvsjdnsdvnsldjas;ldnv;sajnvsl;nv;sdnfv;ndjsvfnsdk;n'
                },
            ],
        }
    }
    render() {
        return (
        <div>
            <div className="mainContainer">
                <ToDo data={this.state.todo} />
                <Doing data={this.state.doing} />
                <Done data={this.state.done} />
            </div>
        </div>

        );
    }
}
export default HomePage;
import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
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

    handleDragEnd = (results) =>{
        console.log(results);
    };

    render() {
        return (
        <div>
            <div className="mainContainer">
                <DragDropContext onDragEnd={()=>{}}> 
                    <ToDo data={this.state.todo} />
                    <Doing data={this.state.doing} />
                    <Done data={this.state.done} />
                </DragDropContext>
            </div>
        </div>
        );
    }
}
export default HomePage;
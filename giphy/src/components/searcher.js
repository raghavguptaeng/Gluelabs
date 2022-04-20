import React, { Component } from 'react'
import ApiFetcher from './apiFetcher'

export default class Searcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            searched:false,
        }
    }
    formSubmithandler = (event) =>{
        event.preventDefault();
        this.setState({searched:true});
        console.log(this.state.inputValue);
    }
    inputhandler = (event) => {

        this.setState({
            inputValue:event.target.value,
        })
    }
  render() {
    return (
      <div>
          <form onSubmit={this.formSubmithandler}>
            <label for="usr" className='m-10'>Search Gif:</label>
            <input type="text" class="form-control w-50 m-auto" id="usr" />
            <br></br>
            <button type="submit" class="btn btn-primary m-10">Submit</button>
          </form>
          <br/>
          {(this.state.searched)?<ApiFetcher tosearch={this.state.inputValue} />:<div>Loading...</div>}
      </div>
    )
  }
}

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      gender:'male',
      swimming:false,
      singing:false,
      dancing:false,
    };
  }

  takeEmailInput = (event) =>{
    this.setState(
      {
        email:event.target.value,
      }
    )
  }

  swimmingState =()=>{
    this.setState({
      swimming:!this.state.swimming
    })
  }
  singingState =()=>{
    this.setState({
      singing:!this.state.singing
    })
  }

  dancingState =()=>{
    this.setState({
      dancing:!this.state.dancing
    })
  }

  genderStateManager = (event)=>{
    this.setState(
      {
        gender:event.target.value,
      }
    )
  }

  render() {
    return (
      <>
        <div className="container">
          <form>
          <label for='email' className="form-check-label">Email</label>
          <input type="text" className="form-control w-25 p-10" onChange={this.takeEmailInput} name='email' placeholder="Enter Email" />
          {/* check boxes start from here */}
          <div className="form-check">
            <h1>Select Hobbies</h1>
            <input className="form-check-input" type="checkbox" value={this.state.dancing} onChange={this.dancingState} id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Dancing
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value={this.state.swimming} onChange={this.swimmingState} id="flexCheckChecked"  />
            <label className="form-check-label" for="flexCheckChecked" >
              Swimming
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value={this.state.singing} onChange={this.singingState} id="flexCheckChecked"  />
            <label className="form-check-label" for="flexCheckChecked">
              Singing
            </label>
          </div>
          {/* check boxes end here */}
          {/* radio boxes start from here */}
          <h1>Select gender</h1>
          <div className="form-check">
            <input className='form-radio-input' value='male' checked={this.state.gender==="male"} onChange={this.genderStateManager} type="radio" id='male' />
            <label className="form-check-label" for="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input className='form-radio-input' value='female' checked={this.state.gender==="female"} onChange={this.genderStateManager} type="radio" id='female'  />
            <label className="form-check-label" for="female">
              Female
            </label>
          </div>
          </form>
        </div>
        <h1>Following details were added</h1>
        <h6>{this.state.email}</h6>
        <h6>{this.state.gender}</h6>
      </>
    )
  }
}
export default App;

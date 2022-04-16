import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown } from 'react-bootstrap';
class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.swimming = React.createRef(); 
        this.dancing = React.createRef();
        this.singing = React.createRef();
        this.states = React.createRef();
        this.gender = React.createRef();
      }
    submithandler = (event) =>{
        alert(`Email: ${this.email.current.value} \n Hobbies: ${this.swimming.current.checked ? 'Swimming' : ''} ${this.dancing.current.checked ? 'Dancing' : ''} ${this.singing.current.checked ? 'Singing' : ''} \n State: ${this.states.current.value} \n`);
        event.preventDefault();
    }
  render() {
    return (
        <>
        <div className="container">
          <form onSubmit={this.submithandler}>
          <label for='email' className="form-check-label">Email</label>
          <input type="text" className="form-control w-25 p-10" ref={this.email} name='email' placeholder="Enter Email" />
          {/* check boxes start from here */}
          <div className="form-check">
            <h1>Select Hobbies</h1>
            <input className="form-check-input" ref={this.dancing}  type="checkbox"   id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Dancing
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" ref={this.swimming}  type="checkbox"   id="flexCheckChecked"  />
            <label className="form-check-label" for="flexCheckChecked" >
              Swimming
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" ref={this.singing} type="checkbox"   id="flexCheckChecked"  />
            <label className="form-check-label" for="flexCheckChecked">
              Singing
            </label>
          </div>
          {/* check boxes end here */}
            <div className="form-check">
                <label className="form-check-label m-4" for="states">State : </label>
                <select  ref={this.states} id="states">
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                </select>
            </div>
          {/* radio boxes start from here */}
        
          <Button className='btn btn-warning' type='submit' >submit</Button>
          </form>
        </div>
      </>
    )
  }
}
export default RefsDemo;
import React from 'react';
import './Log.css';
  
class Signup extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Form submitted');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address";
        }
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined") {
        if(input["password"].length < 6){
            isValid = false;
            errors["password"] = "Please add at least 6 charachter.";
        }
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {

    return (
      <div style={{ textAlign: 'center' }}
      className="log">
        
  <form 
  className="log-form"
  onSubmit={this.handleSubmit}>
  
  <div class="form-group">
      
  <input 
  type="text" 
  name="email" 
  value={this.state.input.email}
  onChange={this.handleChange}
  class="form-control" 
  placeholder="Email*" 
  id="email" />
  
  <div className="text-danger">
  {this.state.errors.email}</div>
  </div>
  
  <div class="form-group">
  <input 
  type="password" 
  name="password" 
  value={this.state.input.password}
  onChange={this.handleChange}
  class="form-control" 
  placeholder="Password*" 
  id="password" />
  
  <div className="text-danger">
  {this.state.errors.password}</div>
  </div>
  
<div class="form-group">
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Confirm password*" 
              id="confirm_password" />

<p>*Camp obbligatoire</p>

  
              <div 
              className="text-danger">
                {this.state.errors.confirm_password}
                </div>
          </div>
             
          <div class="buttonin" >
          <input 
          type="submit" 
          value="Login" 
          class="btn btn-success" />
          </div>

        </form>
      </div>
    );
  }
}
  
export default Signup;
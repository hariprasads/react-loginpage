import React, {Component} from 'react'

class Login extends Component {
  constructor(){
    super()
    this.state = {
      user:{
        username:'',
        email:'',
        mobile:'',
        password:''
      }
    }
  }

  getValue(event){
    console.log("TEST: " + event.target.id +" --- "+ event.target.value)
    let inputValue = Object.assign({}, this.state.user)
    inputValue[event.target.id] = event.target.value
    console.log(JSON.stringify(inputValue))
    this.setState({
      user: inputValue
    })
  }

  submitButton(event){
    event.preventDefault()
    this.props.verify(this.state.user)
  }

  render(){
    return(
      <div id="login">
        <h1>Welcome Back!</h1>
        <form>
          <div className="field-wrap">
            <input type="text" onChange={this.getValue.bind(this)} id="username" placeholder = "User Name" required />
          </div>
          <div className="field-wrap">
            <input type="password" onChange={this.getValue.bind(this)} id="password" placeholder ="Password" required />
          </div>
          <p className="forgot"><a href="#">Forgot Password?</a></p>
          <button onClick = {this.submitButton.bind(this)} className="button button-block"> Log In </button>
        </form>
      </div>
    )
  }
}

export default Login

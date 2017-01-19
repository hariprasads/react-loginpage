import React, { Component } from 'react'
import reactCSS from 'reactcss'
import Tabs from 'react-tabs-navigation'

class Loginform extends Component {
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
    let inputValue = Object.assign({}, this.state.user)
    this.props.verifyUser(inputValue)
  }

  render(){
    const styles = reactCSS({
      'default': {
        card: {
          background: this.props.background,
          boxShadow: '0 2px 4px rgba(0,0,0,.15)',
        },
      },
    })

    return(

      <div className="form">
        <Tabs
          banner={{
            children: ''
          }}
          tabsClassName ={'headbar'}
          tabs={[
            {
              children: () => (
                <div>
                <div id="signup">
                  <h1>Sign Up for Free</h1>
                  <form action="/users" method="post">
                    <div className="field-wrap">
                      <input type="text" name="username" placeholder ="User Name" required />
                    </div>
                    <div className="field-wrap">
                      <input type="email" name="email" placeholder ="Email address" required />
                    </div>
                    <div className="field-wrap">
                      <input type="text" name="mobile" placeholder ="Phone Number" required />
                    </div>
                    <div className="field-wrap">
                      <input type="password" name="password" placeholder ="Password" required />
                    </div>
                    <button type="submit" className="button button-block"> Get Started </button>
                  </form>
                </div>
                </div>
              ),
              displayName: 'Sign up'
            },
            {
              children: () => (
                <div>
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
                </div>
              ),
              displayName: 'Login'
            }
          ]}
        />
      </div>
      
    )
  }
}

export default Loginform

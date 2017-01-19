import React, { Component } from 'react'

class Signup extends Component {

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
  render(){
    return(
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
    )
  }
}

export default Signup

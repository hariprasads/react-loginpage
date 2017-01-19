import React, { Component } from 'react'
import reactCSS from 'reactcss'
import Tabs from 'react-tabs-navigation'
import Signup from './signup'
import Login from './login'

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

  submitUser(user){
    this.props.verifyUser(user)
  }

  render(){

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
              <Signup />
              </div>
            ),
            displayName: 'Sign up'
          },
          {
            children: () => (
              <div>
                <Login verify= {this.submitUser.bind(this)} />
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

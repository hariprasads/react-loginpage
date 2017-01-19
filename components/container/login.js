import React, {Component} from 'react'
import Loginform from '../presentation/loginform'
import { APImanager } from '../../utils/'
import Firstpage from '../presentation/Firstpage'

class Login extends Component{

  constructor(){
      super()
      this.state = {
        user:{
          username: '',
          password: ''
        },
        login: false
      }
  }

  submitUser(user){
    console.log(" User ready")
    let id = user.username
    APImanager.get('/users/' + id, user, (err, response)=>{
        if(err){
          alert('Error: ' + err.message)
          return
        }
        let answer = response.message
        console.log(JSON.stringify(answer))
        if(answer == null){
          alert("No such User!!")
        }
        console.log('User there: ' + JSON.stringify(response))

        let password = answer.password
        if(password == user.password){
            console.log("Verified!! ")
            let updatedlogin = Object.assign(this.state.login)
            updatedlogin = true
            //console.log(login)
            this.setState({
              login: updatedlogin
            })
        }else{
          console.log("Not correct")
          alert("Password Incorrect: Try again!!")
        }

        console.log("Reply from server : "+ JSON.stringify(password))
      })
  }

  render(){

    if (this.state.login) {
        return <Firstpage />
    }

    return(
      <div>
        <Loginform verifyUser={this.submitUser.bind(this)}/>
      </div>
    )
  }
}

export default Login

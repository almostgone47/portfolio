import React from 'react';
import axios from 'axios';

class Signup extends React.Component {

handleSignup = (e) => {
   e.preventDefault();
   const url = 'http://localhost:5000/api/signup';
   const data = {
         username: this.username.value,
         password: this.password.value
      }
   axios.post(url, data)
      .then(response => {
         console.log('Signed UP!: ', response)  
         this.props.history.push('/');
         })
      .catch(err => {
         console.log('Signup err: ', err)
      })
}

render () {

   return (
      <div className="SigninForm">
         <h2 >Sign Up</h2>
         <form onSubmit={this.handleSignup.bind(this)} >
            <input name="email" ref={(input) => this.username = input } />
            <input name="password" type="password" ref={(input) => this.password = input } />
            <input type="submit"/>
         </form>
      </div>
      )
   }
}

export default Signup;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/index';

class Login extends Component {

   state = {
      username: '',
      password: ''
   }

   changeHandler(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   render () {
      return (
         <div className="SigninForm">
            <h2>Login</h2>
            <form>
               <input name="username" onChange={this.changeHandler.bind(this)} value={this.state.username} />
               <input name="password" type="password" onChange={this.changeHandler.bind(this)} value={this.state.password} />
               <input type="button" value="Login" onClick={() => this.props.onLogin({username: this.state.username, password: this.state.password})}/>
            </form>
         </div>
      )
   }
}

function mapStateToProps(state) {
   return {

   }
}

function mapDispatchToProps(dispatch) {
   return {
     onLogin: (user) => dispatch(loginUser(user)) 
   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(Login);
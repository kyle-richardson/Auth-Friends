import React, {useEffect} from 'react';
import {connect} from "react-redux"
import {login, handleChange} from "../actions"


/*format for users*/

// {
//     id: 1
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
//   }


const Login = ({history,credentials,handleChange,login,error,token}) => {
      
    useEffect(()=> {
      if(!!token){
        localStorage.setItem('token', token);
        history.push('/home')
      }
      // eslint-disable-next-line
    } ,[token])

    return (
      <div>
        <h2>Login below</h2>
        {error && <div style={{color: 'red'}}>Username or Password incorrect.</div>}
        <form onSubmit={(e)=>login(e, credentials)}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={e=>handleChange(e, 'credentials')}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={e=>handleChange(e, 'credentials')}
          />
          <button>Log in</button>
        </form>
      </div>
    )
}

const mapStateToProps = state => ({
  credentials: state.credentials,
  error: state.error,
  token: state.token
})

export default connect(mapStateToProps,{login, handleChange})(Login);
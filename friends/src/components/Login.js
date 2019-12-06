import React, {useEffect} from 'react';
import {connect} from "react-redux"
import {login, handleChange} from "../actions"
// import useLocalStorage from "../useLocalStorage"


/*format for users*/

// {
//     id: 1
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
//   }


const Login = ({history,credentials,handleChange,login,token}) => {
      
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
        <form onSubmit={(e)=>login(e, credentials)}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    )
}

const mapStateToProps = state => ({
  token: state.token,
  credentials: state.credentials
})

export default connect(mapStateToProps,{login, handleChange})(Login);
import React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {logout} from "../actions"

const Logout = ({logout})=> {
    return(
        <div>
            <Link to="/" onClick={logout}>
                <div 
                    style={{position: 'absolute', top: '1%', right: '5%'}}
                >
                        Sign Out
                </div>
            </Link>
        </div>
    )
}
  
  export default connect(null,{logout})(Logout);
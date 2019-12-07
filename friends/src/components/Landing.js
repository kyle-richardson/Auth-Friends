import React from "react"
import {Link} from "react-router-dom"

const Landing = ()=> {
    return(
        <div>
            <h1>Hey Friend! Please log in to access your account.</h1>
            <Link to="/login">
                <div style={{padding: '5px'}}>Log in</div>
            </Link>
        </div>
    )
}

export default Landing
import React from "react"
import {Link} from "react-router-dom"
import Logout from "./Logout"

const Landing = ()=> {
    return(
        <div>
            <h3>Error. Something went wrong.  Please go back and try again.</h3>
            <Link to="/home">
                <div>Go Back</div>
            </Link>
            <Logout/>
        </div>
    )
}

export default Landing
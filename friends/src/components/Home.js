import React from "react"
import {Link} from "react-router-dom"
import Logout from "./Logout"

const Home = ()=> {
    return(
        <div>
            <h1>Hey! You made it! Click the following link to find the secret of life:</h1>
            <Link to="/secret">
                <div>Become Enlightened</div>
            </Link>
            <Link to="/friends">
                <div>no thanks, let me see my friends</div>
            </Link>
            <Logout/>
        </div>
    )
}

export default Home
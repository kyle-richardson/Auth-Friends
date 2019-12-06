import React from "react"
import {Link} from "react-router-dom"

const Signout = ()=> {
    return(
        <div>
            <Link to="/" onClick={()=>localStorage.clear()}>
                <div 
                    style={{position: 'absolute', top: '1%', right: '5%'}}
                >
                        Sign Out
                </div>
            </Link>
        </div>
    )
}

export default Signout
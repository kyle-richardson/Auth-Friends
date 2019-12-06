import React from "react"
import {deleteFriend} from "../actions"
import {connect} from "react-redux"

const Friend = ({friend, deleteFriend}) => {
    return (
        <div>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <div onClick={()=> deleteFriend(friend.id)}>X</div>
        </div>
    )
}

export default connect(null,{deleteFriend})(Friend);

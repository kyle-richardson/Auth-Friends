import React, { useEffect} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {getFriends} from "../actions"
import Logout from "./Logout"

const FriendsList = ({friendsList, getFriends, credentials})=> {

    useEffect(()=> {
        getFriends(credentials)
    }, [])
    return(
        <div>
            {friendsList && friendsList.map(friend=>{
                return (
                    <div>
                        <p>Name: {friend.name}</p>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                )
            })}
            <Link to="/home">
                <div>Go Back</div>
            </Link>
            <Logout/>
        </div>
    )
}

const mapStateToProps = state => ({
    friendsList: state.friendsList,
    credentials: state.credentials
  })
  
  export default connect(mapStateToProps,{getFriends})(FriendsList);
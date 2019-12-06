import React, { useEffect} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {getFriends} from "../actions"
import Logout from "./Logout"
import AddFriendForm from "./AddFriendForm"
import Friend from "./Friend"

const FriendsList = ({friendsList, getFriends})=> {

    useEffect(()=> {
        getFriends()
        // eslint-disable-next-line
    }, [friendsList])
    return(
        <div>
            <Link to="/home">
                <div>Go Back</div>
            </Link>
            {friendsList && friendsList.map(friend=>{
                return (
                    <Friend key={friend.id} friend={friend}/>
                )
            })}
            <AddFriendForm/>
            <Logout/>
        </div>
    )
}

const mapStateToProps = state => ({
    friendsList: state.friendsList
  })
  
  export default connect(mapStateToProps,{getFriends})(FriendsList);
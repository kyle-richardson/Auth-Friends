import React, { useEffect} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {getFriends} from "../actions"
import Logout from "./Logout"
import AddFriendForm from "./AddFriendForm"
import Friend from "./Friend"

const FriendsList = ({friendsList, getFriends, isFetching})=> {

    useEffect(()=> {
        getFriends()
        // eslint-disable-next-line
    }, [friendsList])
    return(
        !friendsList ?
        <div>Loading Friends...</div>
        : 
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
    friendsList: state.friendsList,
    isFetching: state.isFetching
  })
  
  export default connect(mapStateToProps,{getFriends})(FriendsList);
import React from "react"
import {connect} from "react-redux"
import {addFriend, handleChangeFriend} from "../actions"

const AddFriendForm = ({addFriend, newFriend, handleChangeFriend})=> {
    return(
        <div>
            <form onSubmit={e=>addFriend(e, newFriend)}>
                <input name='name' type='text' placeholder='Name' value={newFriend.name} onChange={handleChangeFriend}/>
                <input name='age' type='text' placeholder='Age' value={newFriend.age} onChange={handleChangeFriend}/>
                <input name='email' type='text' placeholder='Email' value={newFriend.email} onChange={handleChangeFriend}/>
                <button>Add Friend</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    newFriend: state.newFriend
})
  
  export default connect(mapStateToProps,{addFriend, handleChangeFriend})(AddFriendForm);
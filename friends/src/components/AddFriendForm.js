import React from "react"
import {connect} from "react-redux"
import {addFriend, handleChange} from "../actions"

const AddFriendForm = ({addFriend, newFriend, handleChange})=> {
    return(
        <div>
            <form onSubmit={e=>addFriend(e, newFriend)}>
                <input 
                    name='name' 
                    type='text' 
                    placeholder='Name' 
                    value={newFriend.name} 
                    onChange={e=>handleChange(e,'newFriend')}/>
                <input 
                    name='age' 
                    type='text' 
                    placeholder='Age' 
                    value={newFriend.age} 
                    onChange={e=>handleChange(e,'newFriend')}/>
                <input 
                    name='email' 
                    type='text' 
                    placeholder='Email' 
                    value={newFriend.email} 
                    onChange={e=>handleChange(e,'newFriend')}/>
                <button>Add Friend</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    newFriend: state.newFriend
})
  
  export default connect(mapStateToProps,{addFriend, handleChange})(AddFriendForm);
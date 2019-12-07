import React from "react"
import {deleteFriend, startEdit, finishEdit, handleChange} from "../actions"
import {connect} from "react-redux"

const Friend = ({friend, deleteFriend, isEditing, startEdit, finishEdit, editedFriend, handleChange}) => {
    return (
        editedFriend.id === friend.id
        ? 
        <div>
            <input 
                name='name' 
                type='text' 
                placeholder='Name' 
                value={editedFriend.name} 
                onChange={e=>handleChange(e,'editedFriend')}/>
            <input 
                name='age' 
                type='text' 
                placeholder='Age' value={editedFriend.age} 
                onChange={e=>handleChange(e,'editedFriend')}/>
            <input 
                name='email' 
                type='text' 
                placeholder='Email' 
                value={editedFriend.email} 
                onChange={e=>handleChange(e,'editedFriend')}/>
            <div onClick={()=>finishEdit(editedFriend, friend.id)}>Save</div>
        </div>
        :
        <div>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <div onClick={()=> deleteFriend(friend.id)}>X</div>
            {!isEditing && <div onClick={()=> startEdit(friend.id)}>Edit</div>}
        </div>
    )
}

const mapStateToProps = state => ({
    isEditing: state.isEditing,
    editedFriend: state.editedFriend

})

export default connect(mapStateToProps,{deleteFriend, startEdit, finishEdit, handleChange})(Friend);

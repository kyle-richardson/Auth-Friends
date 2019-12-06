import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import {axiosWithAuth} from "../axiosAuth"

const FriendsList = ()=> {
    const [friendList, setFriendList] = useState([])

    useEffect(()=> {
        axiosWithAuth().get("http://localhost:5000/api/friends")
        .then(res=>{
            // setFriendList(res.data)
            console.log(res.data)
        })
        .catch(err=> console.log(err))

    }, [])
    return(
        <div>
            {friendList && friendList.map(friend=>{
                return (
                    <div>
                        <p>Name: {friend.name}</p>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendsList
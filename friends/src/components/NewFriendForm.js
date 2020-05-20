import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const initialNewFriendInfo = {
    name: '',
    age: '',
    email: '',
}
export default function NewFriendForm () {
const [newFriendInfo, setNewFriendInfo] = useState(initialNewFriendInfo)

const changeNewFriendInfo = e => {
   setNewFriendInfo({
       ...newFriendInfo,
       [e.target.name]: e.target.value
   });
}


const submitNewFriendInfo = e => {
    e.preventDefault()
    const newFriend = {
        name: newFriendInfo.name,
        age: newFriendInfo.age,
        email: newFriendInfo.email
    };
    setNewFriendInfo(initialNewFriendInfo)
    console.log(newFriend, "New Friend data???????????? ")
    axiosWithAuth()
    .post('/api/friends', newFriend)
    .then(res => {
        console.log(res, 'Posting New Friend success???????????')
    })
    .catch(err => {
        console.log(err)
    });
}


    return(
        <form onSubmit = {submitNewFriendInfo}>

            <label>Name</label>
            <input name = 'name'
                   value = {newFriendInfo.name}
                   onChange = {changeNewFriendInfo}/>

            <label>Age</label>
            <input name = 'age'
                   value = {newFriendInfo.age}
                   onChange = {changeNewFriendInfo}/>

            <label>Email</label>
            <input name = 'email'
                   value = {newFriendInfo.email}
                   onChange = {changeNewFriendInfo}/>  
                   <button>Add Friend</button>        
        </form>

    )


}
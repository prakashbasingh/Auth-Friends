import React, { useState, useEffect }from "react";

import NewFriendForm from './NewFriendForm'
import { axiosWithAuth } from "../utils/axiosWithAuth";

// class FriendsList extends React.Component {
export default function FriendsList(props) {
    // state = {
    //     friends: []
    // };
    // componentDidMount(){
    //     this.getData();
    // }

 const [friends, setFriends] = useState([])
    console.log(friends, 'FRIENDlIST data????????')
    // getData = () => {
    //     axiosWithAuth()
    //         .get('/api/data')
    //         .then(res => {
    //             console.log(res, 'what we have here???!!!!????')
    //             this.setState({friends: res.data});
    //             })
    //         .catch(err => {console.log(err)
    //         });
    // }    
    
    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res, 'what we have here???!!!!????')
            setFriends(res.data);
            })
        .catch(err => {console.log(err);
        });
    }, []);
    // render(){
        return(
            <div>
                <NewFriendForm/>
                <div>
                    {friends.map((friend) => {
                        return (
                            <div key={friend.id}>
                                <h4>Name: {friend.name}</h4>
                                <p>Age: {friend.age}</p>
                                <p>Email: {friend.email}</p>
                            </div>    
                        )
                    })}
                </div>
            </div>
        )



    // }



}
// export default FriendsList
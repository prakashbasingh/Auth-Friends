import React from "react";

import Friend from './Friend'
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friendList: []
  };

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/data')
        .then(res => {
            console.log(res, 'what we have here???!!!!????')
          this.setState({
              friendsList: res.data.data.map(friends => {
                  console.log(friends, 'DDDOOO WWEE have Friends here???????!!!???!?!?!?!?!??!')
                  return <Friend key={friends.id} friends={friends} id={friends.id}/>
                })
            })
        })
         .catch(err => console.log(err.response))
    }



}
export default FriendsList
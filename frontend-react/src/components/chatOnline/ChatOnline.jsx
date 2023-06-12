import React, { useEffect, useState } from 'react'
import "./chatOnline.css"
import axios from 'axios';

export default function ChatOnline({onlineUsers, currentId, setCurrentChat}) {

  const [friends, setFriends]= useState([]);
  const [onlineFriends, setOnlineFriends] = useState([])
  const PF = process.env.REACT_APP_PUBLIC_FOLDER


  useEffect(()=>{
    const getFriends = async ()=>{
      const res = await axios.get("/users/friends/" + currentId);
      setFriends(res.data)
    };
    getFriends()
  }, [currentId])

  useEffect(()=>{
    setOnlineFriends(friends.filter((f)=> onlineFriends.includes(f._id)))
    
  }, [friends, onlineUsers]);

  return (
    <div className='chatOnline'>
      {onlineFriends.map((o)=>(

        <div className="chatOnlineFriend">
        <div className="chatOnlineFriendImgContainer">

          <img src={o.profilePicture? PF+o.profilePicture : PF+"/assets/"} alt="" className="chatOnlineFriendImg" />

          <div className="chatOnlineBadge"></div>
        </div>

          <span className="chatOnlineName">{o.username}</span>
      </div>
        ))}
      
    </div>
  )
}

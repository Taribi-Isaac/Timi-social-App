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

  const handleClick= async (user)=>{
    try{
      const res = await axios.get(`/conversations/find/${currentId}/${user._id}`);
      setCurrentChat(res.data)

    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='chatOnline' onClick={()=>handleClick()}>
      {onlineFriends.map((o)=>(

        <div className="chatOnlineFriend">
          <div className="chatOnlineFriendImgContainer">

            <img src={o?.profilePicture? PF+o.profilePicture : PF+"/assets/avartar.png"} 
            alt="" className="chatOnlineFriendImg" />

            <div className="chatOnlineBadge"></div>
          </div>

            <span className="chatOnlineName">{o?.username}</span>
      </div>
        ))}
      
    </div>
  )
}

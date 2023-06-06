import React from 'react';
import "./mutualFriends.css"

export default function mutualFriends({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div>
            <li className="sidbarFriend">
      <img className='sidebarFriendImg' src={PF + user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
    </div>
  )
}

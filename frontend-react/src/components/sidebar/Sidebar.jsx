import React from 'react';
import "./sidebar.css";
import {ChatOutlined, HelpOutline, RssFeed, School, WorkOutline, Event, VideocamOutlined, GroupOutlined, Bookmark} from "@mui/icons-material"
import { Users } from '../../dummyData';
import MutualFriends from "../mutualPeople/MutualFriends"
export default function sidebar({user}) {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Feed
            </span>
          </li>

          <li className="sidebarListItem">
            <ChatOutlined className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Chats
            </span>
          </li>
          <li className="sidebarListItem">
            <VideocamOutlined className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Videos
            </span>
          </li>
          <li className="sidebarListItem">
            <GroupOutlined className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Groups
            </span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Bookmarks
            </span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Questions
            </span>
          </li>
        
          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Jobs
            </span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Events
            </span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Courses
            </span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
         {Users.map(u=>(
          <MutualFriends key={u.id} user={u}/>
         ))}
         
        </ul>

      </div>
    </div>
  )
}

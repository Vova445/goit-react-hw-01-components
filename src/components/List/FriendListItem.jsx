import React from 'react';
import './friends.css'

const FriendListItem = ({ friend }) => {
  const { id, avatar, name, isOnline } = friend;

  return (
    <li key={id} className='item'>
      <span className={isOnline ? 'online' : 'offline'}></span>
      <img className="avatar" src={avatar} alt='User avatar' width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;

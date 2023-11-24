import React from 'react';
import FriendListItem from './FriendListItem'; 

const FriendList = ({ friends }) => {
  return (
    <section>
    <h1 style={{textAlign:'center', fontSize:'42px', marginBottom: '50px'}}>My Friends</h1>
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
    </section>
  );
};

export default FriendList;

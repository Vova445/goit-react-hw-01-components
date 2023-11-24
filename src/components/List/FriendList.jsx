import React from 'react';
import FriendListItem from './FriendListItem'; 

const FriendList = ({ friends }) => {
  return (
    <section>
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
    </section>
  );
};

export default FriendList;

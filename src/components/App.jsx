import React from 'react';
import Profile from './Profile/Profile'; 
import UploadStats from './Stats/UploadStats'; 
import FriendList from './List/FriendList'; 
import TransactionHistory from './Transaction/Transaction';
import user from './Profile/user.json';
import data from './Stats/data.json';
import friends from  './List/friends.json';
import transactions from './Transaction/transactions.json';


export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        backgroundColor: '#e7ecf2',
        flexDirection: 'column',
        gap: '340px',
        paddingTop: '120px'
      }}
    >
      <Profile userData={user} />
      <UploadStats title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

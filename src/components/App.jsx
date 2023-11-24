import React from 'react';
import Profile from './Profile'; 
import UploadStats from './UploadStats'; 
import user from './user.json';
import data from './data.json';

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
    </div>
  );
};

export default App;

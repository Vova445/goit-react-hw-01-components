import React from 'react';
import './profile.css';

const Profile = ({ userData }) => {
  return (
    <div style={{
        width: '30%',
        backgroundColor: '#DBE0E7',
    }}>
      <div className="profile">
      <img src={userData.avatar} alt="avatar" width={200}  style={{
        borderRadius: '50%',
        backgroundColor:'#ffff',
      }}/>

      <p style={{
          fontSize: "36px",
          fontWeight: '800',
          margin: '20px 0',
      }}>
        {userData.username}
      </p>
      <p style={{
        fontSize:'24px',
        margin: '5px 0'
      }}>
        @{userData.tag}
      </p>
      <p style={{
        fontSize:'24px',
        margin: '5px 0'
      }}>
        {userData.location}
        </p>
        </div>
      <ul className="stats">
      <li>
          <span className="label">Followers</span> <br/>
          <span className="quantity">{userData.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span><br/>
          <span className="quantity">{userData.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span><br/>
          <span className="quantity">{userData.stats.likes}</span>
        </li>
      </ul>
      </div>
  );
};

export default Profile;
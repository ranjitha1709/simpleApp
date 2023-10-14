import React from 'react';
import userImage from "../user.png"; 

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div >
              <img src={userImage} alt="User" style={{ "height": "100px" }} />
      </div>
      <div className="profile-details">
        <h2>User's Name</h2>
        <p>Email: user@example.com</p>
        <p>Location: City, Country</p>
      </div>
      <div className="additional-info">
        <h3>About Me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}


export default UserProfile;

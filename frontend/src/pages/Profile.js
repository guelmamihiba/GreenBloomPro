import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state;


  const handleLogout = () => {
    navigate("/signin"); 
  };

  if (!userData) {
    return <p>No user information available. Please sign up first.</p>;
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">My Account</h1>
      <div className="profile-details">
        <p><strong>Account Details:</strong></p>
        <p>{`${userData.firstName} ${userData.lastName}`}</p>
        <p>{userData.email}</p>
        <p>{userData.location}</p>
        <button className="profile-button" onClick={() => navigate("/signin")}>
          View Addresses (1)
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;

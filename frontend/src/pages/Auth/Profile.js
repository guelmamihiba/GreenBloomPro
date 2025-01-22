import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDetails"));
    if (user) {
      setUserDetails(user);
    } else {
      navigate("/signin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    navigate("/signin");
  };

  return (
    <section className="account-page">
      <div className="account-container">
        <h1 className="account-heading">My Account</h1>
        <button className="logout-button" onClick={handleLogout}>
          Log Out
        </button>
        {userDetails && (
          <div className="account-details">
            <h2 className="details-heading">Account Details</h2>
            <p className="details-item">
              {userDetails.firstName.toUpperCase()} {userDetails.lastName.toUpperCase()}
            </p>
            <p className="details-item">{userDetails.email}</p>
            <p className="details-item">{userDetails.country}</p>
            <a href="/signin" className="view-address">
              View addresses (1)
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;

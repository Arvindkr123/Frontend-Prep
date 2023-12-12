import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <h4>Please login first! to show your name</h4>;
  return (
    <div>
      <h2>Welcome , {user.username}</h2>
    </div>
  );
};

export default Profile;

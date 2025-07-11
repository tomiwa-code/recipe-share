import React from "react";
import UserNotFound from "./UserNotFound";
import UserProfile from "./UserProfile";
import { usersData } from "../data";

interface UserPageWrapperProps {
  username: string;
}

const UserPageWrapper = async ({ username }: UserPageWrapperProps) => {
  // Check if user exist
  if (!username) {
    return <UserNotFound />;
  }

  // Get user details
  const getUser = usersData.find((user) => user.username === username);

  // Return not found component if user is not found
  if (!getUser) {
    return <UserNotFound />;
  }

  // Render User Profile Details
  return <UserProfile userData={getUser} />;
};

export default UserPageWrapper;

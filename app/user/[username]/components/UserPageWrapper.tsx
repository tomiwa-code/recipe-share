import React from "react";
import UserNotFound from "./UserNotFound";
import UserProfile from "./UserProfile";
import { usersData } from "../data";

interface UserPageWrapperProps {
  username: string;
}

const UserPageWrapper = async ({ username }: UserPageWrapperProps) => {
  if (!username) {
    return <UserNotFound />;
  }

  const getUser = usersData.find((user) => user.username === username);

  if (!getUser) {
    return <UserNotFound />;
  }

  return <UserProfile userData={getUser} />;
};

export default UserPageWrapper;

export type UserType = {
  _id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  bio: string;
  location: string;
  joinedDate: string;
  stats: UserStats;
  coverPhoto: string;
};

export type UserStats = {
  recipesShared: number;
  totalStar: number;
  recipeSaved: number;
};

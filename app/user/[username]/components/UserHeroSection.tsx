import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/lib/ui/Avatar";
import { UserType } from "@/types/user.type";
import { formatDate, getInitials } from "@/lib/utils";
import { Button } from "@/lib/ui/Button";
import { Edit } from "lucide-react";
import Image from "next/image";

interface UserHeroSectionProps {
  userData: UserType;
}

const UserHeroSection = ({ userData }: UserHeroSectionProps) => {
  const { avatar, name, location, bio, joinedDate, stats, username } = userData;

  return (
    <div className="w-full">
      <div className="w-full relative h-32 md:h-52 bg-black">
        <Image
          src={userData.coverPhoto}
          alt={name}
          width={1000}
          height={1000}
          priority
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>

      <div className="-mt-20 px-4 py-8 z-10 relative">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Profile Avatar  */}
          <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="text-2xl bg-sage-200 text-sage-700">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 md:pt-16 text-center md:text-left">
            {/* User name and Edit Profile Section  */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div className="flex items-center gap-x-2 flex-col md:flex-row">
                <h1 className="text-3xl font-bold text-black capitalize">
                  {name}
                </h1>
                <p className="text-sm text-gray-500 capitalize">({username})</p>
              </div>

              <div className="flex gap-2 justify-center md:justify-start">
                <Button variant="default" size="sm" className="gap-2 bg-white">
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
            </div>

            {/* User Bio  */}
            <p className="text-gray-600 text-sm mb-4 max-w-2xl">{bio}</p>

            {/* Location and Date Joined  */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-gray-600 mb-4">
              <span>📍 {location}</span>
              <span>📅 Joined {formatDate(joinedDate)}</span>
            </div>

            {/* Stats */}
            <div className="flex gap-6 justify-center md:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-black">
                  {stats.recipesShared}
                </div>
                <div className="text-sm text-gray-500">Recipes</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-black">
                  {stats.totalStar.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">Stars Collected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeroSection;

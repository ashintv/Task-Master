import { memo } from "react";
import { ProfileIcon } from "../icons/profile";
import { SearchIcon } from "../icons/search";
import { ProfileCard } from "./cards/profile-card";
// Import the LogoutButton component here
import { LogoutButton } from "../components/LogoutButton"; 

export const Topbar = memo(function Topbar() {
  return (
    <div className="flex gap-5 justify-center items-center py-10 px-5 drop-shadow-xl h-15 bg-white shadow-secondary w-full mb-3">
      <div className="rounded-full w-full flex border border-secondary">
        <SearchIcon />
        <input
          className="w-full h-10 outline-0 px-5"
          placeholder="Search"
          type="text"
        />
        {/* TODO  add more icons here like
          notification
          inbox 
        */}
      </div>
      <ProfileCard />
      
      {/* Place the LogoutButton right here */}
      <LogoutButton />
    </div>
  );
});
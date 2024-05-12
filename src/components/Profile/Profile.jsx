import React from "react";

function ProfileCard({ closeProfile }) {
	return (
	  <div className="profile-card">
		{/* Profile card content */}
		<button className="close-button" onClick={closeProfile}>
		  Close
		</button>
	  </div>
	);
  }
  
  function Header({ setIsBoardModalOpen, isBoardModalOpen }) {

  
	return (
	  <div className=" p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0 ">
		<header className=" flex justify-between dark:text-white items-center  ">
		  {/* Existing code... */}
  
		  {/* Right Side */}
		  <div className=" flex space-x-4 items-center md:space-x-6 ">
			{/* Existing code... */}
  
			<button className="button" onClick={openProfile}>
			  Profile
			</button>
		  </div>
  
		  {/* Existing code... */}
	   
		{isProfileOpen && <ProfileCard closeProfile={closeProfile} />}
		</header>
	  </div>
	);
  }
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RiLogoutCircleLine } from "react-icons/ri"; // Import logout icon
import AddEditBoardModal from "../modals/AddEditBoardModal";
import Column from "./Column";
import EmptyBoard from "./EmptyBoard";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header.js";

function Home() {
  const navigate = useNavigate();

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const columns = board.columns;

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);



  const handleLogout = () => {
    // Redirect to login page
    navigate("/");
  };

  return (
    <div
      className={
        windowSize[0] >= 768 && isSideBarOpen
          ? " bg-[#f4f7fd]  scrollbar-hide h-screen flex dark:bg-[#20212c]  overflow-x-scroll gap-6  ml-[261px]"
          : "bg-[#f4f7fd]  scrollbar-hide h-screen flex    dark:bg-[#20212c] overflow-x-scroll gap-6 "
      }
    >
      {windowSize[0] >= 768 && (
        
        <Sidebar
          setIsBoardModalOpen={setIsBoardModalOpen}
          isBoardModalOpen={isBoardModalOpen}
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
      )}
 <Header
          setIsBoardModalOpen={setIsBoardModalOpen}
          isBoardModalOpen={isBoardModalOpen}
        />
      {/* Columns Section */}

      {columns.length > 0 ? (
        <>
          {columns.map((col, index) => (
            <Column key={index} colIndex={index} />
          ))}
          <div
            onClick={() => {
              setIsBoardModalOpen(true);
            }}
            className=" h-screen dark:bg-[#2b2c3740] flex justify-center items-center font-bold text-2xl hover:text-[] transition duration-300 cursor-pointer bg-[#E9EFFA] scrollbar-hide mb-2   mx-5 pt-[90px] min-w-[280px] text-[#828FA3] mt-[135px] rounded-lg "
          >
            + New Column
          </div>
        </>
      ) : (
        <>
          <EmptyBoard type="edit" />
        </>
      )}
      {isBoardModalOpen && (
        <AddEditBoardModal
          type="edit"
          setIsBoardModalOpen={setIsBoardModalOpen}
        />
      )}

      {/* Flying logout icon */}
      <div
        className="fixed bottom-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700 transition duration-300"
        onClick={handleLogout}
      >
        <RiLogoutCircleLine size={32} />
      </div>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Home from "./components/Home";
import EmptyBoard from './components/EmptyBoard';
import boardsSlice from "./redux/boardsSlice";
import LoginForm from "./components/Login/LoginForm.jsx"
import Signup from "./components/Login/Signup.jsx"
import { BrowseGallery } from "@mui/icons-material";
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";


function App() {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const activeBoard = boards.find((board) => board.isActive);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };
  if (!activeBoard && boards.length > 0)
    dispatch(boardsSlice.actions.setBoardActive({ index: 0 }));
  return (
      <div>
        <BrowserRouter>
        <Routes>
        <>
        <Route path="/" element={<LoginForm/>}></Route>
        <Route path="/Home" element={<Home />}></Route>  
        <Route path="/Signup" element={<Signup  />}></Route>
        
        
        
        </>

        </Routes>
        
        </BrowserRouter>
      </div>   
 
  );
}

export default App;

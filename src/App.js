import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Routes,
  useHistory,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Status from "./components/Status";
import Profile from "./components/Profile";
import Message from "./components/Message";
import Add_Post from "./components/Add_Post";
import Trending from "./components/Trending";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/message" element={<Message />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import Users from "./views/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<DefaultLayout />}>
            <Route path="/users" element={<Users />} />
          </Route>

          <Route path="/" element={<GuestLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

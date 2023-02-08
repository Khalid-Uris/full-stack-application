// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import Users from "./views/Users";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

           <Route path="*" element={<NotFound />} />

          <Route path="/" element={<DefaultLayout />} />
          <Route path="/users" children={() => <Users></Users>} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/abc" element={<GuestLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      App
    </div>
  );
}

export default App;


import React from "react";
import Home from './Home';
import Contact from './Contact';
import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <h1>Hello Monsterlessons</h1>
      <Link to="/">Home</Link><br></br>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Users, NotFound } from "./pages";
import { Header } from "./components";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

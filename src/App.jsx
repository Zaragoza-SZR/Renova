import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import CoursesPage from "./pages/Courses";
import Events from "./pages/Events";
import NewsEventDetail from "./components/NewsEvent";

import "./scss/app.scss";

function App() {
  return (
    <>
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<NewsEventDetail />} />
          <Route path="/news/:id" element={<NewsEventDetail />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

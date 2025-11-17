import React from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Cities from "./pages/Destinations";
import Activities from "./pages/Activities";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PostDetail from "./components/PostDetail";

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="destinations" element={<Cities />} />
        <Route path="activities" element={<Activities />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<PostDetail />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById("root")).render(<App />);

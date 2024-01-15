import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error404 from "./pages/Error404";
import Logout from "./pages/Logout";
import AdminLayout from "./components/Layout/AdminLayout";
import AdminUser from "./pages/AdminUser";
import AdminContact from "./pages/AdminContact";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <BrowserRouter>
        {loading ? "" : <Navbar />}
        <Routes>
          <Route
            path="/"
            element={loading ? <Loader setLoading={setLoading} /> : <Home />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error404 />} />
          {/* admin   */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUser />} />
            <Route path="contacts" element={<AdminContact />} />
          </Route>
        </Routes>
        {loading ? "" : <Footer />}
      </BrowserRouter>
    </>
  );
};

export default App;

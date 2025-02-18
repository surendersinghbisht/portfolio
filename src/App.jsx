import React from "react";
import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Contact from "./Contact";
import Social from "./Social";
import Projects from "./Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Navbar />

        {/* Wrapping each section with Framer Motion for smooth animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Home />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Aboutme />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Projects />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Contact />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Social />
        </motion.div>
      </div>
    </BrowserRouter>
  );
}

export default App;

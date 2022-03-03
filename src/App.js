import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.1, duration: 1 },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={<Home containerVariants={containerVariants} />}
            />
            <Route
              path="portfolio"
              element={<Portfolio containerVariants={containerVariants} />}
            />
            <Route
              path="about"
              element={<About containerVariants={containerVariants} />}
            />
            <Route
              path="contact"
              element={<Contact containerVariants={containerVariants} />}
            />
            <Route
              path="*"
              element={<NotFound containerVariants={containerVariants} />}
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;

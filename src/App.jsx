import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";

import Menu from "./components/Menu/Menu";

const Home = lazy(() => import("./pages/Home/Home"));
const Work = lazy(() => import("./pages/Work/Work"));
const Project = lazy(() => import("./pages/Project/Project"));
const About = lazy(() => import("./pages/About/About"));
const FAQ = lazy(() => import("./pages/FAQ/FAQ"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

import { AnimatePresence } from "framer-motion";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1400);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Menu />
      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={null}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/work" element={<Work />} />
            <Route path="/sample-project" element={<Project />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;

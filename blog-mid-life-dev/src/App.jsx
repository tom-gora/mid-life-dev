import "./App.css";

import { useState, useEffect } from "react";
import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
import SectionSliderRecentPosts from "./layouts/SectionSliderRecentPosts";
import SectionAllPosts from "./layouts/SectionAllPosts";
import Post from "./layouts/Post";
import Footer from "./layouts/Footer";
import MobileMenuToggle from "./components/MobileMenuToggle";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showNavigationShadow, setShowNavigationShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        // User has scrolled 200 pixels from the top, so show the shadow.
        setShowNavigationShadow(true);
      } else {
        // User is within the top 200 pixels, so hide the shadow.
        setShowNavigationShadow(false);
      }
    };

    // Attach the scroll event listener when the component mounts.
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts to avoid memory leaks.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.style.background = isDarkMode ? "#080c1f" : "#eeedec";
  }, [isDarkMode]);
  return (
    <div className={`main ${isDarkMode ? "dark" : ""} `}>
      < MobileMenuToggle />
      <Navbar
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        showNavigationShadow={showNavigationShadow}
      />
      <Header />
      <SectionSliderRecentPosts />
      <SectionAllPosts />
      <Post />
      <Footer />
    </div>
  );
};

export default App;

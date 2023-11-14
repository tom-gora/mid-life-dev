import "./App.css";

import { useState, useEffect, useLayoutEffect } from "react";
import { PostProvider } from "./utils/usePosts";
import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
import SectionSliderRecentPosts from "./layouts/SectionSliderRecentPosts";
import SectionAllPosts from "./layouts/SectionAllPosts";
import Post from "./layouts/Post";
import About from "./layouts/About";
import Footer from "./layouts/Footer";
import MobileMenuToggle from "./components/MobileMenuToggle";

const App = () => {
  // states:

  // state for adding bottom box shadow to navbar when scrolled away from the top
  const [showNavigationShadow, setShowNavigationShadow] = useState(false);
  //state to manage changes that need toggling with JS on the smalles responsive breakpoint
  const [isMobileView, setIsMobileView] = useState(window.innerWidth >= 600);
  // sate to handle position of mobile version of menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // state to handle page view
  const [currentView, setCurrentView] = useState("home");
  // state to store previous view
  const [previousView, setPreviousView] = useState(null);

  // state to handle dark mode with storing and and retrieving it from local storage
  // attempt to extract value from local storage
  const storedThemePreference = localStorage.getItem(
    "mldBlogThemePreference"
  );
  const getTheme = () => {
    // if dark then correctly true, if light or null then false
    return storedThemePreference === "dark";
  };
  const [isDarkMode, setIsDarkMode] = useState(getTheme());
  // state handling clicked post
  const [selectedPostId, setSelectedPostId] = useState(null);

  // state handlers

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen((prevIsMobileMenuOpen) => !prevIsMobileMenuOpen);
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const handlePostClick = (postId) => {
    setPreviousView(currentView);
    setSelectedPostId(postId);
    setCurrentView("post");
  };
  const handleAboutClick = () => {
    setPreviousView(currentView);
    setCurrentView("about");
  };
  const handleHomeClick = () => {
    setCurrentView("home");
  };

  // side effects

  // observe mobile menu toggle to trigger state change
  useEffect(() => {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    mobileMenuToggle.addEventListener("click", handleMobileMenuOpen);
    return () =>
      mobileMenuToggle.removeEventListener("click", handleMobileMenuOpen);
  }, []);
  // observe viewport widtht to trigger state change for the smallest breakpoint
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth >= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // observe if user scrolled 20px away from top to triugger side effect (state change)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setShowNavigationShadow(true);
      } else {
        setShowNavigationShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // after re-render changing the view scroll to the top
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [currentView]);
  // apart from toggling app wrapper class, make document's body have the appropriate color manually
  useEffect(() => {
    document.body.style.background = isDarkMode ? "#080c1f" : "#eeedec";
  }, [isDarkMode]);

  return (
    <div className={`main ${isDarkMode ? "dark" : ""} `}>
      <div id="top"></div>
      <MobileMenuToggle
        isMobileMenuOpen={isMobileMenuOpen}
        isMobileView={isMobileView}
      />
      <Navbar
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        showNavigationShadow={showNavigationShadow}
        isMobileMenuOpen={isMobileMenuOpen}
        currentView={currentView}
        onAboutClick={handleAboutClick}
        onHomeClick={handleHomeClick}
        onPostClick={(postId) => handlePostClick(postId)}
      />
      <PostProvider>
        {currentView === "home" && (
          <>
            <Header />
            <SectionSliderRecentPosts
              onPostClick={(postId) => handlePostClick(postId)}
            />
            <SectionAllPosts
              onPostClick={(postId) => handlePostClick(postId)}
            />
          </>
        )}
        {currentView === "post" && (
          <Post
            selectedPostId={selectedPostId}
            setView={setCurrentView}
            previousView={previousView}
          />
        )}
      </PostProvider>
      {currentView === "about" && (
        <>
          <Header />
          <About
            setView={setCurrentView}
            previousView={previousView}
          />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;

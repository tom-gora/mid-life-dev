import "./App.css";

import { useState, useEffect } from "react";
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
  // state to handle showing and hiding post view
  const [showPost, setShowPost] = useState(false);
  // state to handle showing and hiding about view
  const [showAbout, setShowAbout] = useState(false);
  // state to handle showing and hiding about view
  const [showHeader, setShowHeader] = useState(true);
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
    setSelectedPostId(postId);
    setShowHeader(false);
    setShowPost((prevShowPost) => !prevShowPost);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleAboutClick = () => {
    setShowAbout((prevShowAbout) => !prevShowAbout);
    setShowHeader(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        isMobileView={isMobileView}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        showNavigationShadow={showNavigationShadow}
        isMobileMenuOpen={isMobileMenuOpen}
        onAboutClick={handleAboutClick}
        showAbout={showAbout}
      />
      <PostProvider>
        {showHeader ? (<Header />) : null}
        {showAbout ? (
          <About
            onAboutClick={handleAboutClick}
            showAbout={showAbout}
          />
        ) : null}
        {!showAbout && (
          <>
            {showPost ? (
              <Post
                selectedPostId={selectedPostId}
                onLinkClick={handlePostClick}
              />
            ) : (
              <>
                <SectionSliderRecentPosts
                  onLinkClick={(postId) =>
                    handlePostClick(postId)
                  }
                />
                <SectionAllPosts
                  onLinkClick={(postId) =>
                    handlePostClick(postId)
                  }
                />
              </>
            )}
          </>
        )}
      </PostProvider>
      <Footer />
    </div>
  );
};

export default App;

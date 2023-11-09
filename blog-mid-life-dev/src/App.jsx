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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showNavigationShadow, setShowNavigationShadow] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth >= 600);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPost, setShowPost] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen((prevIsMobileMenuOpen) => !prevIsMobileMenuOpen);
  };

  useEffect(() => {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    mobileMenuToggle.addEventListener("click", handleMobileMenuOpen);

    return () =>
      mobileMenuToggle.removeEventListener("click", handleMobileMenuOpen);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth >= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.style.background = isDarkMode ? "#080c1f" : "#eeedec";
  }, [isDarkMode]);

  const [selectedPostId, setSelectedPostId] = useState(null);

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
    setShowPost((prevShowPost) => !prevShowPost);
  };

  return (
    <div className={`main ${isDarkMode ? "dark" : ""} `}>
      <div id="top"></div>
      {
        <MobileMenuToggle
          isMobileMenuOpen={isMobileMenuOpen}
          isMobileView={isMobileView}
        />
      }
      <Navbar
        isMobileView={isMobileView}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        showNavigationShadow={showNavigationShadow}
        isMobileMenuOpen={isMobileMenuOpen}
        onAboutClick={() =>
          setShowAbout((prevShowAbout) => !prevShowAbout)
        }
        showAbout={showAbout}
      />
      <PostProvider>
        {showPost ? null : <Header />}
        {showAbout ? (
          <About
            onAboutClick={() =>
              setShowAbout((prevShowAbout) => !prevShowAbout)
            }
            showAbout={showAbout}
          />
        ) : null}
        {showAbout ? null : (
          <>
            {showPost ? null : <SectionSliderRecentPosts />}
            {showPost ? null : (
              <SectionAllPosts
                onLinkClick={(postId) =>
                  handlePostClick(postId)
                }
              />
            )}
            {showPost ? (
              <Post
                selectedPostId={selectedPostId}
                onLinkClick={handlePostClick}
              />
            ) : null}
          </>
        )}
      </PostProvider>
      <Footer />
    </div>
  );
};

export default App;

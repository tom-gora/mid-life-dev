import "./App.css";

import { useState, useEffect } from "react";
import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
import SectionSliderRecentPosts from "./layouts/SectionSliderRecentPosts";
import SectionAllPosts from "./layouts/SectionAllPosts";
import Post from "./layouts/Post";
import Footer from "./layouts/Footer";

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
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts to avoid memory leaks.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`main ${isDarkMode ? 'dark' : ''} `}>
      <Navbar toggleDarkMode={toggleDarkMode} showNavigationShadow={showNavigationShadow} isDarkMode={isDarkMode} />
      <div style={{ paddingTop: '10rem', minHeight: '1000px', padding: '20px', fontSize: '16px', lineHeight: '1.5', overflowY: 'auto' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ipsum id mauris ultrices, eget tincidunt tellus auctor. Nullam nec eros nec justo fringilla auctor. Suspendisse potenti. Vivamus eget mauris nec dui blandit ullamcorper. Vestibulum sollicitudin, eros id dignissim vestibulum, augue metus facilisis leo, sit amet fringilla ante quam sit amet dolor.

        // ... (repeat the text as needed to create a long scrollable content)

        Vivamus euismod nulla in mi convallis, quis consequat metus elementum. In non lectus at purus lacinia finibus ac vel mi. In ac efficitur tellus, eget tempor ante. Vestibulum auctor tellus vitae risus bibendum luctus. Sed dignissim libero eu nulla sollicitudin, eu mollis arcu posuere. Sed vestibulum sem at ante condimentum, at feugiat turpis elementum.

      // ... (repeat the text as needed to create a long scrollable content)
      </div>

      <Header />
      <SectionSliderRecentPosts />
      <SectionAllPosts /> w
      <Post />
      <Footer />
    </div>
  );
}

export default App;

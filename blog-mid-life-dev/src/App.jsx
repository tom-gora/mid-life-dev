import "./App.css";

import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
import SectionSliderRecentPosts from "./layouts/SectionSliderRecentPosts";
import SectionAllPosts from "./layouts/SectionAllPosts";
import Post from "./layouts/Post";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="main dark">
      <div className="test">test</div>
      <Navbar />
      <Header />
      <SectionSliderRecentPosts />
      <SectionAllPosts />
      <Post />
      <Footer />
    </div>
  );
}

export default App;

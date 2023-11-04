import { useState, useEffect } from "react";
import "./styles/SectionAllPosts.css";
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";

const SectionAllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Fetch the JSON data (adjust the URL as needed)
    fetch("../../public/mock_data.json")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="all-posts">
      <h2 className="all-posts__section_header">All posts</h2>

      {posts.map((post) => (
        <div className="all-posts__post" key={post.id}>
          <div className="all-posts__post-text-wrapper">
            <div className="all-posts__post-date">
              {post.publicationDate}
            </div>
            <h3 className="all-posts__post-title">{post.title}</h3>
            <p className="all-posts__post-intro">{post.intro}</p>
          </div>
          <div className="all-posts__post-image-wrapper">
            <img
              className="all-posts__post-image"
              src="https://images.unsplash.com/photo-1696451203476-7ee3bbfc882e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTEwMzAxNw&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
            />
          </div>
          <a href="#">Read More {<HiOutlineChevronDoubleRight />}</a>
        </div>
      ))}
    </div>
  );
};

export default SectionAllPosts;

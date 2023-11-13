import "./styles/Post.css";

import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import { usePosts } from "../utils/usePosts";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi2";

const Post = ({ selectedPostId, setView, previousView }) => {
  const { posts } = usePosts();

  const post = posts.find((post) => post.id === selectedPostId);

  return (
    <div className="post__post-wrapper">
      <p className="post__post-author">{post.author}</p>
      <h2 className="post__post-title">{post.title}</h2>
      <p className="post__post-date">
        {format(new Date(post.publicationDate), "dd MMM yyyy")}
      </p>
      <a
        className="post__post-back"
        onClick={() => setView(previousView === "post" ? "home" : previousView)}
      >
        {<HiOutlineChevronDoubleLeft />} Go Back
      </a>

      <div className="post__post-image-wrapper">
        <img
          className="post__post-image"
          src={post.imageURL}
          alt={post.title}
        />
      </div>
      <div className="post__post-content">
        <ReactMarkdown children={post.content}></ReactMarkdown>
      </div>
      <a
        className="post__post-back"
        onClick={() => setView(previousView === "post" ? "home" : previousView)}
      >
        {<HiOutlineChevronDoubleLeft />} Go Back
      </a>
    </div>
  );
};

export default Post;

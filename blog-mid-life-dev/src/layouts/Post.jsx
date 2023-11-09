import "./styles/Post.css";

import ReactMarkdown from "react-markdown";
import { usePosts } from "../utils/usePosts";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi2";

const Post = ({ onLinkClick, selectedPostId }) => {
  const { posts } = usePosts();
  console.log(selectedPostId);

  const post = posts.find((post) => post.id === selectedPostId);

  return (
    <div className="post__post-wrapper">
      <p className="post__post-author">{post.author}</p>
      <h2 className="post__post-title">{post.title}</h2>
      <p className="post__post-date">{post.publicationDate}</p>
      <div className="post__post-image-wrapper">
        <img
          className="post__post-image"
          src={post.imageURL}
          alt={post.title}
        />
      </div>
      <div classname="post__post-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>

      </div>
      <a
        className="post__post-back"
        href="#"
        onClick={() => onLinkClick()}
      >
        {<HiOutlineChevronDoubleLeft />} Go Back
      </a>
    </div>
  );
};

export default Post;

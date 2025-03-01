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
            <div className="post__back-wrapper">
                <a
                    role="button"
                    style={{ cursor: "pointer" }}
                    className="post__post-back"
                    onClick={() =>
                        setView(previousView === "post" ? "home" : previousView)
                    }
                >
                    {<HiOutlineChevronDoubleLeft />} Go Back
                </a>
            </div>

            <div className="post__post-image-wrapper">
                <img
                    className="post__post-image"
                    src={`https://strapi.tomgora.online${post.featuredImage.data.attributes.formats.small.url}`}
                    srcSet={`${`https://strapi.tomgora.online${post.featuredImage.data.attributes.formats.small.url}`} 600w,
        ${`https://strapi.tomgora.online${post.featuredImage.data.attributes.formats.medium.url}`} 900w,
        ${`https://strapi.tomgora.online${post.featuredImage.data.attributes.formats.large.url}`} 1200w`}
                    sizes="(max-width: 600px) 600px, (max-width: 900px) 900px, 1200px"
                    alt={post.title}
                />
            </div>
            <div className="post__post-content">
                <ReactMarkdown children={post.content}></ReactMarkdown>
            </div>
            <div className="post__back-wrapper">
                <a
                    role="button"
                    style={{ cursor: "pointer" }}
                    className="post__post-back"
                    onClick={() =>
                        setView(previousView === "post" ? "home" : previousView)
                    }
                >
                    {<HiOutlineChevronDoubleLeft />} Go Back
                </a>
            </div>
        </div>
    );
};

export default Post;

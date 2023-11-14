import { useState, useLayoutEffect } from "react";
import { usePosts } from "../utils/usePosts";
import "./styles/SectionAllPosts.css";
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";
import ReactPaginate from "react-paginate";
import { format } from "date-fns";
import { TbSquareChevronLeftFilled } from "react-icons/tb";
import { TbSquareChevronRightFilled } from "react-icons/tb";

const SectionAllPosts = ({ onPostClick }) => {
  const { posts } = usePosts();
  // states uses by react-paginate
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage] = useState(4);

  // state to make sure to execute below effect only when user clicks on pagination menu, not on every component render
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(false);

  // making sure when user interacting with the pagination menu the bottom of the page where menu is kept in view
  // regardless of changes to the viewport height
  useLayoutEffect(() => {
    if (shouldScrollToBottom) {
      window.scrollTo(0, document.body.scrollHeight);
      setShouldScrollToBottom(false);
    }
  }, [shouldScrollToBottom, currentPage]);

  // pagination handling as per react-paginate docs
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    setShouldScrollToBottom(true);
  };
  const displayedPosts = posts.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage
  );

  return (
    <>
      <div className="all-posts">
        <h2 className="all-posts__section_header">All posts</h2>

        {displayedPosts.map((post) => (
          <div className="all-posts__post" key={post.id}>
            <div className="all-posts__post-text-wrapper">
              <div className="all-posts__post-date">
                {format(
                  new Date(post.publicationDate),
                  "dd MMM yyyy"
                )}
              </div>
              <h3
                className="all-posts__post-title"
                onClick={() => onPostClick(post.id)}
              >
                {post.title}
              </h3>
              <p className="all-posts__post-intro">
                {post.intro}
              </p>
            </div>
            <div
              className="all-posts__post-image-wrapper"
              onClick={() => onPostClick(post.id)}
            >
              <img
                className="all-posts__post-image"
                src={`https://admin.tomgora.online${post.featuredImage.data.attributes.formats.thumbnail.url}`}
                srcSet={`${`https://admin.tomgora.online${post.featuredImage.data.attributes.formats.thumbnail.url}`} 600w,
        ${`https://admin.tomgora.online${post.featuredImage.data.attributes.formats.small.url}`} 900w,
        ${`https://admin.tomgora.online${post.featuredImage.data.attributes.formats.medium.url}`} 1200w`}
                alt=""
                sizes="(max-width: 600px) 600px, (max-width: 900px) 900px, 1200px"
              />
            </div>
            <a href="#" onClick={() => onPostClick(post.id)}>
              Read More {<HiOutlineChevronDoubleRight />}
            </a>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={<TbSquareChevronLeftFilled size="2.5rem" />}
        nextLabel={<TbSquareChevronRightFilled size="2.5rem" />}
        breakLabel={"..."}
        pageCount={Math.ceil(posts.length / postsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"all-posts__pagination"}
        activeClassName={"pagination-active-page"}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default SectionAllPosts;

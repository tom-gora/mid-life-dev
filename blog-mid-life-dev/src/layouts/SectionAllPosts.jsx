import { useState, useEffect } from "react";
import { usePosts } from "../utils/usePosts";
import "./styles/SectionAllPosts.css";
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";
import ReactPaginate from "react-paginate";
import { format } from "date-fns";
import { TbSquareChevronLeftFilled } from "react-icons/tb";
import { TbSquareChevronRightFilled } from "react-icons/tb";

const SectionAllPosts = ({ onLinkClick }) => {
  const { posts } = usePosts();
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage] = useState(4);


  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [currentPage]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
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
              <h3 className="all-posts__post-title" onClick={() => onLinkClick(post.id)}>
                {post.title}
              </h3>
              <p className="all-posts__post-intro">
                {post.intro}
              </p>
            </div>
            <div className="all-posts__post-image-wrapper" onClick={() => onLinkClick(post.id)}>
              <img
                className="all-posts__post-image"
                src={post.imageURL}
                alt=""
              />
            </div>
            <a href="#" onClick={() => onLinkClick(post.id)}>
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

import { useState, useEffect } from "react";
import "./styles/SectionAllPosts.css";
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";
import ReactPaginate from "react-paginate";
import { format } from "date-fns";
import { TbSquareChevronLeftFilled } from "react-icons/tb";
import { TbSquareChevronRightFilled } from "react-icons/tb";

const SectionAllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    fetch("mock_data.json")
      .then((response) => response.json())
      .then((data) => {
        const sortedPosts = data.sort((b, a) => {
          const dateA = new Date(a.publicationDate);
          const dateB = new Date(b.publicationDate);
          return dateA - dateB;
        });
        setPosts(sortedPosts);
      }).catch((error) => console.error("Error fetching data:", error));
  }, []);

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
                {format(new Date(post.publicationDate), "dd MMM yyyy")}
              </div>
              <h3 className="all-posts__post-title">
                {post.title}
              </h3>
              <p className="all-posts__post-intro">
                {post.intro}
              </p>
            </div>
            <div className="all-posts__post-image-wrapper">
              <img
                className="all-posts__post-image"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <a href="#">
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

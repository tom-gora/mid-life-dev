import Flickity from "react-flickity-component";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { usePosts } from "../utils/usePosts";

import "./styles/SectionSliderRecentPosts.css";

const SectionSliderRecentPosts = () => {
  const { posts } = usePosts();

  const displayedPosts = posts.slice(0, 3);

  const sliderConfig = {
    initialIndex: 2,
    wrapAround: true,
    autoPlay: 5000,
    pageDots: false,
    pauseAutoPlayOnHover: true,
  };

  return (
    <div className="recent-posts__slider-wrapper">
      <h2 className="recent-posts__section_header">Recent posts</h2>

      <Flickity
        className={"recent-postst__slider"} // default ''
        elementType={"div"} // default 'div'
        options={sliderConfig} // takes flickity options {}
        disableImagesLoaded={false} // default false
      >
        {displayedPosts.map((post) => (
          <div className="recent-posts__post" key={post.id}>
            <div className="recent-posts__post-date">
              {format(
                new Date(post.publicationDate),
                "dd MMM yyyy"
              )}
            </div>
            <h3 className="recent-posts__post-title">
              {post.title}
            </h3>
            <div className="recent-posts__post-image-wrapper">
              <img
                className="recent-posts__post-image"
                src={post.imageURL}
                alt=""
              />
            </div>
          </div>
        ))}
      </Flickity>
    </div>
  );
};

export default SectionSliderRecentPosts;

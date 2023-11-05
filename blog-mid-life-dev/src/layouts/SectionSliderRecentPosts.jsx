import Flickity from "react-flickity-component";
import { IoChevronBack } from "react-icons/io5"
import { IoChevronForward } from "react-icons/io5"

import "./styles/SectionSliderRecentPosts.css";

const SectionSliderRecentPosts = () => {
  const sliderConfig = {
    initialIndex: 2,
    wrapAround: true,
    autoPlay: 3000,
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
        <div className="recent-posts__post">
          <div className="recent-posts__post-date">22 Sep 2024</div>
          <h3 className="recent-posts__post-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sequi, omnis.
          </h3>
          <div className="recent-posts__post-image-wrapper"><img
            className="recent-posts__post-image"
            src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          /></div>
        </div>

      </Flickity>
    </div>
  );
};

export default SectionSliderRecentPosts;

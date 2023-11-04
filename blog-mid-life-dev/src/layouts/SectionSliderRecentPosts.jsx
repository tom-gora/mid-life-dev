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
            src="https://images.unsplash.com/photo-1696451203476-7ee3bbfc882e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTEwMzAxNw&ixlib=rb-4.0.3&q=80&w=1080"
            alt=""
          /></div>
        </div>

      </Flickity>
    </div>
  );
};

export default SectionSliderRecentPosts;

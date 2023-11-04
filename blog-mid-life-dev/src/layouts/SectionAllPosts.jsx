import "./styles/SectionAllPosts.css";
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";

const SectionAllPosts = () => {
  return (
    <div className="all-posts">
      <h2 className="all-posts__section_header">All posts</h2>

      <div className="all-posts__post">
        <div className="all-posts__post-text-wrapper">
          <div className="all-posts__post-date">22 Sep 2024</div>
          <h3 className="all-posts__post-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sequi, omnis.
          </h3>
          <p className="all-posts__post-intro">
            Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Nulla eaque magni facilis ducimus atque adipisci
            animi in ex explicabo non. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quidem porro officia, facilis, blanditiis maxime aperiam possimus minus excepturi sequi molestiae. Aspernatur ratione molestiae adipisci temporibus delectus quasi beatae natus ab voluptates nostrum mollitia quisquam, ex corrupti aliquam excepturi asperiores earum quaerat perferendis. Ullam quas eaque assumenda repudiandae consequatur corrupti?
          </p>
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

      <div className="all-posts__post">
        <div className="all-posts__post-text-wrapper">
          <div className="all-posts__post-date">22 Sep 2024</div>
          <h3 className="all-posts__post-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sequi, omnis.
          </h3>
          <p className="all-posts__post-intro">
            Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Nulla eaque magni facilis ducimus atque adipisci
            animi in ex explicabo non.
          </p>
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

      <div className="all-posts__post">
        <div className="all-posts__post-text-wrapper">
          <div className="all-posts__post-date">22 Sep 2024</div>
          <h3 className="all-posts__post-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sequi, omnis.
          </h3>
          <p className="all-posts__post-intro">
            Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Nulla eaque magni facilis ducimus atque adipisci
            animi in ex explicabo non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur dolor suscipit mollitia assumenda delectus.
          </p>
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


      <div className="all-posts__post">
        <div className="all-posts__post-text-wrapper">
          <div className="all-posts__post-date">22 Sep 2024</div>
          <h3 className="all-posts__post-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sequi, omnis.
          </h3>
          <p className="all-posts__post-intro">
            Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Nulla eaque magni facilis ducimus atque adipisci
            animi in ex explicabo non.
          </p>
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
    </div>
  );
};

export default SectionAllPosts;

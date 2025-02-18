import Flickity from "react-flickity-component";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { usePosts } from "../utils/usePosts";

import "./styles/SectionSliderRecentPosts.css";

const SectionSliderRecentPosts = ({ onPostClick }) => {
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
                        <a
                            style={{ cursor: "pointer" }}
                            onClick={() => onPostClick(post.id)}
                        >
                            <h3 className="recent-posts__post-title">
                                {post.title}
                            </h3>
                            <div className="recent-posts__post-image-wrapper">
                                <img
                                    className="recent-posts__post-image"
                                    src={`https://strapi.tomgora.online${post.featuredImage.data.attributes.formats.thumbnail.url}`}
                                    srcSet={`${`https://strapi.tomgora.online${post.featuredImage.data.attributes.formats.thumbnail.url}`} 600w,
        ${`https://strapi.tomgora.online${post.featuredImage.data.attributes.formats.small.url}`} 900w,
        ${`https://strapi.tomgora.online${post.featuredImage.data.attributes.formats.medium.url}`} 1200w`}
                                    sizes="(max-width: 600px) 600px, (max-width: 900px) 900px, 1200px"
                                    alt={
                                        post.featuredImage.data.attributes
                                            .alternativeText
                                    }
                                />
                            </div>
                        </a>
                    </div>
                ))}
            </Flickity>
        </div>
    );
};

export default SectionSliderRecentPosts;

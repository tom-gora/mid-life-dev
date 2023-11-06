import "./styles/Post.css"
import { HiOutlineChevronDoubleLeft } from "react-icons/hi2"

import { useEffect, useState } from "react";
const Post = ({ onLinkClick }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("mock_data.json")
      .then((response) => response.json())
      .then((data) => {
        const firstPost = data[0];
        setPost(firstPost);
      }).catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="post__post-wrapper">
      <p className="post__post-author">{post.author}</p>
      <h2 className="post__post-title">{post.title}</h2>
      <p className="post__post-date">{post.publicationDate}</p>
      <div className="post__post-image-wrapper"><img className="post__post-image" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={post.title} /></div>
      <div className="post__post-content" dangerouslySetInnerHTML={{ __html: post.content + "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempora facilis, ratione, voluptatum delectus enim voluptatibus, vel voluptatem consectetur eius necessitatibus omnis dicta repellendus dolor! Cum suscipit perspiciatis vero ipsa, vitae non enim consequuntur omnis rerum temporibus vel libero, quidem quos doloribus. Officiis ullam quo ducimus rem, veritatis, quam expedita atque quod quae dolor nam itaque ratione! Ea unde omnis neque dolor labore rem! Aperiam cupiditate placeat laudantium vel sequi tenetur, dignissimos molestiae magni possimus corporis consectetur dolor soluta. Eius error tenetur repellat, veniam voluptatum enim! Commodi enim dignissimos facere saepe suscipit reiciendis nobis nemo nesciunt quos! Saepe impedit dolor, veniam iste eveniet similique esse vel quae non nemo ut fuga, ex tempora laudantium tenetur, nesciunt inventore cupiditate et delectus quisquam amet dolore? Error quis commodi quam ipsa mollitia deserunt eum non asperiores hic amet in ea obcaecati maiores sunt molestias, et cumque eligendi. Nihil repellat magnam quibusdam deleniti enim mollitia harum dignissimos, quisquam esse beatae alias nesciunt corporis aliquid vel ullam iste eum temporibus consequatur quod consectetur cumque ducimus officiis. Unde voluptate animi eveniet possimus adipisci molestias sequi, quae accusantium autem. Ad repellat sed nemo sit commodi dolor atque explicabo error? Assumenda eveniet culpa corporis eum dolorem nihil rerum harum perspiciatis architecto quaerat. Repellat possimus iure, ipsam laudantium at assumenda incidunt iusto provident praesentium voluptates, eum distinctio necessitatibus officiis obcaecati repellendus illum fugiat maxime enim blanditiis ex, adipisci tenetur ducimus voluptatibus! Architecto quo at asperiores eveniet unde obcaecati eius, ipsa inventore debitis alias aliquam dolorem tempora ipsum quibusdam saepe eum temporibus reprehenderit hic quia velit maiores nostrum assumenda quaerat ut! Vel sit, accusamus atque obcaecati officia laboriosam in suscipit aliquid odio veniam natus quia necessitatibus optio adipisci rem voluptas laudantium perferendis fugiat! Eos quo perferendis beatae alias unde blanditiis accusamus amet expedita iste harum qui quaerat, dolorem officiis molestiae, ipsa fugit, iusto modi natus? Excepturi exercitationem distinctio quas officia provident modi sint? Ratione mollitia et quia, delectus sunt dignissimos, inventore nulla tempora repudiandae minus porro saepe ab consequuntur distinctio enim pariatur non ipsam tenetur voluptatibus perspiciatis? Quis cupiditate molestiae itaque quo vero vitae quia dolorem. Doloribus, vel! Temporibus repudiandae laboriosam voluptatum consequuntur ipsam inventore modi ad earum. Voluptatum nulla a asperiores expedita amet perspiciatis et voluptatibus mollitia minima adipisci quibusdam neque ab consequuntur aliquam enim autem, hic omnis beatae delectus. Dolorum provident totam amet ad est omnis natus nobis, distinctio asperiores quas veniam beatae id eligendi assumenda corrupti nostrum obcaecati possimus laborum iste consequatur ducimus quae? Deserunt numquam dolores modi, perferendis voluptatibus minima quasi aliquam repudiandae ab aperiam eaque sequi quas optio commodi fugit odio. Quo nisi sed veritatis aspernatur, alias pariatur perferendis nulla quod placeat dolore vel voluptate exercitationem veniam nemo voluptatibus quasi quam doloribus laborum, officia voluptatum accusamus! Ipsa omnis odio dolores obcaecati dignissimos maxime voluptatibus illo quas distinctio, ab, tempora minima sit? Quis aliquam magni iure reiciendis ut nisi placeat asperiores sint quisquam alias exercitationem porro quam recusandae voluptatibus enim officiis odit, eum sequi. Unde fugit minus commodi aliquam voluptatibus non harum debitis! Nemo, cum quidem." }} />
      <a className="post__post-back" href="#" onClick={() => onLinkClick()}>
        {<HiOutlineChevronDoubleLeft />} Go Back
      </a>

    </div>
  );
}

export default Post;

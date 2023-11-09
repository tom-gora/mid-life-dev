import { createContext, useContext, useState, useEffect } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postsStrapiEndpoint = "http://localhost:1337/api/posts";
    const token = import.meta.env.VITE_REACT_APP_STRAPI_TOKEN;
    const headers = {
      Authorization: `bearer ${token}`,
    };

    fetch(postsStrapiEndpoint, { headers })
      .then((response) => response.json())
      .then((data) => {
        const postData = data.data;
        const formattedPosts = postData.map((post) => {
          const { id, attributes } = post;
          return { id, ...attributes };
        });

        const sortedPosts = formattedPosts.sort((b, a) => {
          const dateA = new Date(a.publicationDate);
          const dateB = new Date(b.publicationDate);
          return dateA - dateB;
        });
        setPosts(sortedPosts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostContext);
};

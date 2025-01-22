import axios from 'axios';

/**
 * Fetches all posts from the API and returns the total count and the posts data.
 * 
 * @async
 * @function fetchTotalPosts
 * @returns {Promise<{postsNumber: number, posts: object[]}>} An object containing the number of posts and the posts data.
 */
export const fetchTotalPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return {
    postsNumber: response.data.length,
    posts: response.data,
  };
};

/**
 * Fetches a paginated subset of posts based on the given page and page size.
 * 
 * @async
 * @function fetchPaginationPosts
 * @param {number} page - The page number to retrieve.
 * @param {number} pageSize - The number of posts per page.
 * @returns {Promise<object[]>} A subset of posts for the requested page.
 */
export const fetchPaginationPosts = async (page: number, pageSize: number) => {
  const { posts } = await fetchTotalPosts();
  return posts.slice((page - 1) * pageSize, page * pageSize);
};

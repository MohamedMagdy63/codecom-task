import axios from 'axios';

export const fetchTotalPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return {
    postsNumber : response.data.length,
    posts: response.data,
  }
};

export const fetchPaginationPosts = async (page: number, pageSize: number) => {
  const {posts} = await fetchTotalPosts();
  return posts.slice((page - 1) * pageSize, page * pageSize);
}
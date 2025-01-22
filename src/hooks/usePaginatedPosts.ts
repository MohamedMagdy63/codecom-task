import { useEffect, useState } from "react";
import { fetchPaginationPosts, fetchTotalPosts } from "@/lib/fetchPosts";

/**
 * Custom hook to manage paginated posts with adjustable page size.
 * 
 * @param {number} [initialPageSize=10] - The initial number of posts per page.
 * @returns {{
 *   posts: object[],
 *   postsNumber: number,
 *   currentPage: number,
 *   pageSize: number,
 *   loading: boolean,
 *   handlePageChange: (page: number, newPageSize: number) => void
 * }} Object containing paginated posts data and state management functions.
 */
export function usePaginatedPosts(initialPageSize: number = 10) {
  const [posts, setPosts] = useState([]);
  const [postsNumber, setPostsNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getPosts = async () => {
      try {
        const totalData = await fetchTotalPosts();
        setPostsNumber(totalData.postsNumber);

        const paginatedPosts = await fetchPaginationPosts(currentPage, pageSize);
        setPosts(paginatedPosts);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, [currentPage, pageSize]);

  /**
   * Updates the current page and page size for pagination.
   * 
   * @param {number} page - The new page number to set.
   * @param {number} newPageSize - The new number of posts per page.
   */
  const handlePageChange = (page: number, newPageSize: number) => {
    setCurrentPage(page);
    setPageSize(newPageSize);
  };

  return {
    posts,
    postsNumber,
    currentPage,
    pageSize,
    loading,
    handlePageChange,
  };
}

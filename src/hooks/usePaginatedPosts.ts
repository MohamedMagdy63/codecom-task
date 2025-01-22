import { useEffect, useState } from "react";
import { fetchPaginationPosts, fetchTotalPosts } from "@/lib/fetchPosts";

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

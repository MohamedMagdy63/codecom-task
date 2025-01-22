"use client";
import FooterComponent from "@/components/Footer";
import Loader from "@/components/Loader";
import PaginationComponent from "@/components/Pagination";
import PostsList from "@/components/PostList";
import { usePaginatedPosts } from "@/hooks/usePaginatedPosts";

export default function Home() {
  const {
    posts,
    postsNumber,
    currentPage,
    pageSize,
    loading,
    handlePageChange,
  } = usePaginatedPosts(10);

  return (
    <>
      <div className="flex flex-col items-center min-h-screen p-6 gap-8 sm:p-12 text-gray-800">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-2">Posts Pagination Task</h1>
          <p className="text-lg text-gray-600">Provided to Codecom Company</p>
        </header>

        {/* Main Content */}
        <main className="w-full max-w-4xl flex flex-col items-center gap-8">
          {loading ? (
            <Loader />
          ) : (
            <>
              {/* Posts List */}
              <PostsList posts={posts} />

              {/* Pagination */}
              <PaginationComponent
                current={currentPage}
                pageSize={pageSize}
                total={postsNumber}
                onChange={handlePageChange}
              />
            </>
          )}
        </main>
      </div>
      {/* Footer */}
      <FooterComponent />
    </>
  );
}

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
      <div className="flex flex-col items-center min-h-screen p-4 sm:p-6 md:p-12 lg:p-16 gap-6 sm:gap-8 lg:gap-10 text-gray-800">
        {/* Header */}
        <header className="text-center px-4 sm:px-6 md:px-12">
          <h1 className="text-3xl sm:text-2xl md:text-5xl font-extrabold text-blue-600 mb-2">Posts Pagination Task</h1>
          <p className="text-md sm:text-lg md:text-xl text-gray-600">Provided to Codecom Company</p>
        </header>

        {/* Main Content */}
        <main className="w-full max-w-6xl flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
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

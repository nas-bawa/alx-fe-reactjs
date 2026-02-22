import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function PostsComponent() {
  const fetchPosts = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data;
  };

  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5,          // ✅ keep cache for 5 minutes
    staleTime: 1000 * 60,              // ✅ data considered fresh for 1 minute
    refetchOnWindowFocus: false,       // ✅ don’t auto-refetch when window regains focus
    keepPreviousData: true,            // ✅ keep old data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={() => refetch()}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Refetch Posts
      </button>

      <ul className="space-y-4">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold text-blue-600">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;

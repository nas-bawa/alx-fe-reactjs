import { useQuery } from "react-query";
import axios from "axios";

function PostsComponent() {
  // Fetch function
  const fetchPosts = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data;
  };

  // useQuery hook
  const { data, error, isLoading, isError, refetch } = useQuery("posts", fetchPosts);

  if (isLoading) {
    return <p className="text-center text-gray-600">Loading posts...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

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
          <li
            key={post.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;

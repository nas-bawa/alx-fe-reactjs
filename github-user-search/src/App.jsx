import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { getUser } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const data = await getUser(username);
    setUser(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />

      {user && (
        <div style={{ marginTop: "2rem" }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="120"
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;

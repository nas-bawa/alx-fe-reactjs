import axios from "axios";

const BASE_URL = import.meta.env.VITE_GITHUB_API_URL || "https://api.github.com";

export async function getUser(username) {
  try {
    const headers = {};

    // If you set a token in .env, include it
    if (import.meta.env.VITE_GITHUB_API_KEY) {
      headers.Authorization = `token ${import.meta.env.VITE_GITHUB_API_KEY}`;
    }

    const response = await axios.get(`${BASE_URL}/users/${username}`, { headers });
    console.log("API response:", response.data); // 👈 helps you debug
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}

import { useState } from "react";

// Simple mock authentication hook
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate login/logout
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}

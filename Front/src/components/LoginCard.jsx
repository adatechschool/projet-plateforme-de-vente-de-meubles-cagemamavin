import { Card } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the Auth context

const LoginCard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth(); // Destructure setIsAuthenticated from Auth context

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } // Parsing the JSON response into a JavaScript object
      const data = await response.json();
      console.log(data);
      // console.log(data);
      // console.log("Success:", JSON.stringify(data.body));
      // Handle successful login (e.g., store token, redirect)
      // Handle successful login (e.g., store token)
      setSuccessMessage("Connected successfully!");
      // Set the authentication state to true
      setIsAuthenticated(true);

      setTimeout(() => {
        navigate("/home");
      }, 3000); // 1 second delay
    } catch (error) {
      console.error("Error:", error);
      setError(
        "Failed to log in. Please check your credentials and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-sm w-full shadow-lg rounded-lg overflow-hidden mx-auto mt-10">
      <Card>
        <div className="bg-[#F0EFEB] px-6 py-4">
          <div className="font-bold text-xl mb-4">Connexion</div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Nom d'utilisateur
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Mot de passe
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-xs italic mb-4">{error}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-xs italic mb-4">
                {successMessage}
              </p>
            )}
            <div className="flex items-center justify-between">
              <button
                className="bg-stone-400 hover:bg-stone-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Se connecter"}
              </button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default LoginCard;

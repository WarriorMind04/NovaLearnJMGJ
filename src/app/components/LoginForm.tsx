"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginCredentials } from "../interfaces";
import { login } from "../lib/api";
const LoginForm = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const { fullName, favoriteBook } = await login(credentials);
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("favoriteBook", favoriteBook);
      router.push("/welcome");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al conectar con el servidor"
      );
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Biblioteca Virtual NovaLearn
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Usuario
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Iniciar Sesión
        </button>
      </form>
      {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
    </div>
  );
};

export default LoginForm;

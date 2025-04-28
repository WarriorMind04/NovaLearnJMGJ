"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Welcome() {
  const router = useRouter();
  const fullName =
    typeof window !== "undefined" ? localStorage.getItem("fullName") : null;
  const favoriteBook =
    typeof window !== "undefined" ? localStorage.getItem("favoriteBook") : null;

  useEffect(() => {
    if (!fullName || !favoriteBook) {
      router.push("/");
    }
  }, [fullName, favoriteBook, router]);

  if (!fullName || !favoriteBook) return null;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Biblioteca Virtual NovaLearn
        </h1>
        <h2 className="text-xl text-gray-700 mb-2">
          ¡Bienvenido, {fullName}! Disfruta de tu lectura.
        </h2>
        <p className="text-gray-600 mb-6">Tu libro favorito: {favoriteBook}</p>
        <Link
          href="/"
          className="text-blue-600 hover:underline"
          onClick={() => {
            localStorage.removeItem("fullName");
            localStorage.removeItem("favoriteBook");
          }}
        >
          Cerrar Sesión
        </Link>
      </div>
    </main>
  );
}

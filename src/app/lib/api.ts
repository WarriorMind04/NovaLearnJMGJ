import { LoginCredentials, LoginResponse, ErrorResponse } from '../interfaces';

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await fetch('http://localhost:3001/api/students/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error((data as ErrorResponse).message || 'Usuario o contraseña incorrectos');
  }

  return data as LoginResponse;
};
export interface LoginCredentials {
    username: string;
    password: string;
  }
  
  export interface LoginResponse {
    fullName: string;
    favoriteBook: string;
  }
  
  export interface ErrorResponse {
    message: string;
  }
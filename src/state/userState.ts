export interface User {
    id: string;
    name: string;
    email: string;
  }
  
  export interface AuthState {
    user: User | null;
    token: string | null;
  }
  
  export type AuthAction =
    | { type: 'LOGIN'; payload: { user: User; token: string } }
    | { type: 'LOGOUT' };
  
  export const initialAuthState: AuthState = {
    user: null,
    token: null,
  };
  
  export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
      case 'LOGIN':
        return {
          user: action.payload.user,
          token: action.payload.token,
        };
      case 'LOGOUT':
        return {
          user: null,
          token: null,
        };
      default:
        return state;
    }
  };
  
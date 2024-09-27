interface StateContextType<T> {
    auth: T;
    setAuth: React.Dispatch<React.SetStateAction<T>>;
  }
  export interface AuthContextData {
    token: string | null;
    active: boolean;
  }
  export type AuthContextType = StateContextType<AuthContextData | null>;
  
  export interface AuthContextProps {
    children: React.ReactNode;
  }
import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

import { User } from '../../types/User'; // Assuming the User module is located in the '../types' directory.

const AuthContext = createContext<User | null>(null);

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean;
};

export default function AuthProvider({
  children,
  isSignedIn,
}: AuthProviderProps) {
  
  const [user] = useState<User | null>(isSignedIn ? { id: 1, username: 'example', email: 'example@example.com' } : null);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

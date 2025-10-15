import { createContext } from 'react';

type User = {
  name: string;
  role: string;
};

type UserContextType = {
  user: User;
  updateRole: (newRole: string) => void;
};

const UserContext = createContext<UserContextType | null>(null);

export { type User, type UserContextType, UserContext };

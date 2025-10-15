import { useState, type ReactNode } from 'react';
import { UserContext, type User } from './UserContext';

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    name: 'Drumil',
    role: 'Learner',
  });

  const updateRole = (newRole: string) => {
    setUser((prev) => ({ ...prev, role: newRole }));
  };

  return (
    <UserContext.Provider value={{ user, updateRole }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

import React, { createContext, useContext, useState } from 'react';

type Block = '1' | '2' | '3' | '4' | '5';

interface UserLevelContextType {
  block: Block;
  setBlock: (block: Block) => void;
}

const UserLevelContext = createContext<UserLevelContextType | undefined>(undefined);

export const UserLevelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [block, setBlock] = useState<Block>('1');

  return (
    <UserLevelContext.Provider value={{ block, setBlock }}>
      {children}
    </UserLevelContext.Provider>
  );
};

export const useUserLevel = () => {
  const context = useContext(UserLevelContext);
  if (context === undefined) {
    throw new Error('useUserLevel must be used within a UserLevelProvider');
  }
  return context;
};
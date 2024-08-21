import { createContext, useContext, useState } from "react";
const USER_DEFAULT_VALUES = {
  id: undefined,
  email: undefined,
  name: undefined,
  type: undefined,
};

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(USER_DEFAULT_VALUES);

  function login(id, email, name, type) {
    setUser({ id, email, name, type });
  }

  function logout() {
    setUser(USER_DEFAULT_VALUES);
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isLoggedIn: !!user.id }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

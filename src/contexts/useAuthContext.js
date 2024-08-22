import { createContext, useContext, useState } from "react";

const key = "ieat@user";

const USER_DEFAULT_VALUES = {
  id: undefined,
  email: undefined,
  name: undefined,
  type: undefined,
};

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem(key)) ?? USER_DEFAULT_VALUES
  );

  function login(id, email, name, type, boughtCourses) {
    const user = { id, email, name, type, boughtCourses };
    setUser(user);
    sessionStorage.setItem(
      key,
      JSON.stringify({ id, email, name, type, boughtCourses })
    );
  }

  function logout() {
    setUser(USER_DEFAULT_VALUES);
    sessionStorage.removeItem(key);
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

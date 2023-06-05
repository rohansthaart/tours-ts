import { createContext, useEffect, useState } from "react";

interface Iprops {
  children: React.ReactNode;
}

export const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: Iprops) => {
  let userData;
  try {
    userData = JSON.parse(localStorage.getItem("userData") || "{}");
  } catch (error: any) {
    userData = {};
  }

  const [user, setUser] = useState<any>(userData);
  const [admin, setAdmin] = useState<any>(userData);
  const [rememberMeData, setRememberMeData] = useState<any>(
    JSON.parse(localStorage.getItem("rememberMeData") || "{}")
  );
  const [rememberMe, setRememberMe] = useState<boolean>(true);

  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem("rememberMe", JSON.stringify(rememberMeData));
    } else {
      localStorage.removeItem("rememberMe");
    }
    localStorage.setItem("user", JSON.stringify(user));
    setAdmin(user);
  }, [user, rememberMeData, rememberMe]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        admin,
        setAdmin,
        rememberMe,
        setRememberMe,
        rememberMeData,
        setRememberMeData,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type User = {
  username: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (userInfo: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userInfo: User) => {
    if (
      userInfo.username === "testUser" &&
      userInfo.email === "test@gmail.com"
    ) {
      setUser(userInfo);
    } else {
      console.log("cant logged in");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
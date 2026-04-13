// LoginPage.tsx
import { useState } from "react";
import { useAuth } from "./context/AuthContext";

const LoginPage = () => {
  const { user, login, logout } = useAuth(); // ← useAuth でContextの値を取得
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    login({ username, email });
  };

  return (
    <div>
      {user ? (
        // ログイン済みの場合
        <div>
          <p>ようこそ、{user.username} さん！</p>
          <button onClick={logout}>ログアウト</button>
        </div>
      ) : (
        // 未ログインの場合
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleLogin}>ログイン</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
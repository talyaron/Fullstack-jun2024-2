import React, { FC } from 'react';
import { useAuthLogin } from './authLoginVM';

interface AuthProps {
  onLoginSuccess: () => void;
}

const AuthLogin: FC<AuthProps> = ({ onLoginSuccess }) => {
  const {email, setEmail, password, setPassword, error, handleLogin } = useAuthLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await handleLogin();

    if (result.success) {
      onLoginSuccess();
    } else {
      console.error(result.error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default AuthLogin;

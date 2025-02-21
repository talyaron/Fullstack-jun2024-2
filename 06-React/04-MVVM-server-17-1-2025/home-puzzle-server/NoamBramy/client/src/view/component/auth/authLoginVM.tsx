// authLoginVM.ts
import { useState } from 'react';
import { AuthModel } from '../../../model/auth/authLoginModel';

export const useAuthLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const authData: AuthModel = { email, password };

    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authData),
        credentials: 'include', 
      });

      const data = await response.json();

      if (response.status === 200) {
        return { success: true };
      }

      return { success: false, error: data.error || 'Login failed' };
    } catch (err) {
      return { success: false, error: 'An error occurred' };
    }
  };

  return { email, setEmail, password, setPassword, error, handleLogin };
};

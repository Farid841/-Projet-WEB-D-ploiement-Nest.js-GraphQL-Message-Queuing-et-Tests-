// src/pages/LoginPage.tsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
};

export default LoginPage;

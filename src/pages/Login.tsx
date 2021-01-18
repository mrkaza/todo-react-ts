import { SignIn } from 'modules/auth';
import React from 'react';

export const Login: React.FC = () => {
  return (
    <div className="content-wrapper">
      <SignIn />
    </div>
  );
};

export { Login as default };

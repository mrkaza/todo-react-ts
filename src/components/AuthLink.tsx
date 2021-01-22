import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
  text: string;
};

export const AuthLink: React.FC<Props> = ({ to, text }) => {
  return (
    <Link className="auth-link" to={to}>
      {text}
    </Link>
  );
};

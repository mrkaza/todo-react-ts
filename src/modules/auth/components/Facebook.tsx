import { Button } from 'components';
import { facebookLogin } from 'modules/auth';
import React from 'react';
import { useDispatch } from 'react-redux';

export const Facebook: React.FC = () => {
  const dispatch = useDispatch();

  const facebook = () => {
    dispatch(facebookLogin());
  };

  return (
    <Button
      onClick={facebook}
      className="button button--medium button--primary button--round"
    >
      Login with Facebook
    </Button>
  );
};

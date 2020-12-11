import { facebookLogin } from 'modules/auth';
import React from 'react';
import { useDispatch } from 'react-redux';

export const Facebook = () => {
  const dispatch = useDispatch();

  const facebook = () => {
    dispatch(facebookLogin());
  };

  return (
    <button onClick={facebook} className="btn blue darken-3">
      Login with Facebook
    </button>
  );
};

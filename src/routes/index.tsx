import React from 'react';
import {useAuth} from '../hooks/auth';
import {Home} from '../screens/Home';
import {Login} from '../screens/Login';

export function Routs() {
  const {token} = useAuth();

  return <>{token === '' ? <Login /> : <Home />}</>;
}

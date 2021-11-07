import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

// Context
import FirebaseContext from '../context/firebase';

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
    <div className='container flex mx-auto max-width-screen-md items-center h-screen'>
      <p>I am a login page</p>
    </div>
  )
}

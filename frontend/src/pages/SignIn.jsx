import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const SignIn = () => {

  const PORT = 5555;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveSignIn = () => {
    const data = {
      email,
      password,
    };
    setLoading(true);
    axios
      .post(`http://localhost:${PORT}/signin`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('SignIn successfully entered User', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Login</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Email</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Password</label>
          <input
            type='number'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveSignIn}>
          Enter
        </button>
      </div>
      <div className='flex mt-10'>
        <p className='mx-auto'>Sign in or
            <Link className='text-sky-600 ml-1' to="/signin">
                Create an account
            </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn
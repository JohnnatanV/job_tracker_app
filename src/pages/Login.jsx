import { useState } from 'react';
import { login } from '../services/authService';
import { saveUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const { user, token } = await login({ email, password });
      saveUser(user, token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className='p-4 max-w-md mx-auto'>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>

        <input className='w-full p-2 border' type="email" name="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required />
        <input className='w-full p-2 border' type="password" name="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
        {error && <p className='text-red-500'>{error}</p>}
        <button type="submit" className='bg-blue-600 text-white px-4 py-2 rounded'>Login</button>
      </form>
    </div>
  );
}

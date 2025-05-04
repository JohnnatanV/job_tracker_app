import { logout } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  return (<div className='p-4'>
    <h1 className='text-2xl font-bold'>Dashboard</h1>
    <button onClick={handleLogout} className='bg-red-600 text-white px-4 py-2 rounded'>Logout</button>
  </div>);
}

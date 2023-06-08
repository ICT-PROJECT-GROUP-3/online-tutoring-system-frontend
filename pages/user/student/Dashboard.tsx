import { useContext } from 'react';
import { AuthContext } from '../../../context/auth/SessionContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const calluser = () => {
    console.log(JSON.stringify(user));
  };

  const userLogout = () => {
    try {
      logout();
    } catch (error) {
      console.log('error logging out' + error);
    }
    console.log(JSON.stringify(user));
  };

  return (
    <div className="mt-40">
      <button className="bg-orange-400" onClick={calluser}>
        get user
      </button>
      <button className="bg-red-400" onClick={userLogout}>
        Log out
      </button>
    </div>
  );
};

export default Dashboard;

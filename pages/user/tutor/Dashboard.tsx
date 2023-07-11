import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import TutorSideNav from '../../../components/pagecomponents/user/tutor/TutorSideNav';
import TutorDashboard from '../../../components/pagecomponents/user/tutor/pages/TutorDashboard';
import TutorPayments from '../../../components/pagecomponents/user/tutor/pages/TutorPayments';
import TutorProfileDashboard from '../../../components/pagecomponents/user/tutor/pages/TutorProfileDashboard';
import TutorSessions from '../../../components/pagecomponents/user/tutor/pages/TutorSessions';
import TutorSupport from '../../../components/pagecomponents/user/tutor/pages/TutorSupport';
import { AuthContext } from '../../../context/auth/SessionContext';

/**
 * Tutor Dashboard page in the tutor section of the user dashboard.
 * Displays various sections of the tutor dashboard based on the selected component.
 */
const Dashboard = () => {
  const router = useRouter();
  const { user, logout, tutor } = useContext(AuthContext);
  const id = tutor?._id;

  const handleLogout = async () => {
    logout;
    router.push('/Auth');
  };

  const [activeComponent, setActiveComponent] = useState<string>('');

  const handleSidebarClick = (componentName: string) => {
    setActiveComponent(componentName);
  };

  const students = [];

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <TutorDashboard />;
      case 'Profile':
        return <TutorProfileDashboard />;
      case 'Session':
        return <TutorSessions />;
      case 'Support':
        return <TutorSupport />;
      case 'Payment':
        return <TutorPayments />;
      default:
        return <TutorDashboard />;
    }
  };

  return (
    <div>
      <TutorSideNav onSidebarClick={handleSidebarClick} />
      <div className="w-screen screen">{renderComponent()}</div>
    </div>
  );
};

export default Dashboard;

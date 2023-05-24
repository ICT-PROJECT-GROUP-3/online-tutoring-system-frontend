import React, { useState } from 'react';
import Sidebar from '../../../components/pagecomponents/user/admin/SideBar';
import DashboardComponent from '../../../components/pagecomponents/user/admin/Dashboard';
import Users from '../../../components/pagecomponents/user/admin/Users';
import UserManagementPage from '../../../components/pagecomponents/user/admin/UserManagement';

const Dashboard: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>('');

  const handleSidebarClick = (componentName: string) => {
    setActiveComponent(componentName);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <DashboardComponent />;
      case 'users':
        return <UserManagementPage />;
      // case 'component3':
      //   return <Component3 />;
      default:
        return <DashboardComponent />;
    }
  };

  return (
    <div className="mt-28 flex gap-6">
      <Sidebar onSidebarClick={handleSidebarClick} />
      <div className="flex-11 w-full">{renderComponent()}</div>
    </div>
  );
};

export default Dashboard;

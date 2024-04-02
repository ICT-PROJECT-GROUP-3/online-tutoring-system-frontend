import React, { useState } from 'react';
import DashboardComponent from '../../../components/pagecomponents/user/admin/Dashboard';
import Sidebar from '../../../components/pagecomponents/user/admin/SideBar';
import UserManagementPage from '../../../components/pagecomponents/user/admin/UserManagement';

/**
 * The Dashboard component.
 * @returns {JSX.Element} The JSX element representing the Dashboard component.
 */
const Dashboard: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>('');

  /**
   * Handles the click on the sidebar item.
   * @param {string} componentName - The name of the clicked sidebar item.
   */
  const handleSidebarClick = (componentName: string) => {
    setActiveComponent(componentName);
  };

  /**
   * Renders the active component based on the selected sidebar item.
   * @returns {JSX.Element} The JSX element representing the active component.
   */
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

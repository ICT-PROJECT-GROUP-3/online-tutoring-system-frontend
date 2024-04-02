import React from 'react';
import Menu from '../../../components/pagecomponents/student_dashboard/menu';
import Navbar from '../../../components/shared/navbar/Navbar';

/**
 * Layout component for the student dashboard page.
 * Renders the navbar, menu, and page content.
 * @param {React.ReactNode} children - The children components to be rendered within the layout.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-screen">
        <Navbar />
        <div className="flex flex-col w-11/12 mx-auto my-8 lg:w-4/5 lg:flex-row justify-items-center">
          <div className="lg:mx-8 lg:w-1/4">
            <div className="w-full lg:w-80">
              <Menu />
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-3/4">{children}</div>
        </div>
      </div>
    </>
  );
}

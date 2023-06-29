import React from 'react';
import Menu from '../../../components/pagecomponents/student_dashboard/menu';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-screen">
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

import React from 'react';
import Sidebar from '../Components/UI/sidebar';
// import MainDashboard from '../Pages/Dashboard/dashboard';

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <div className="flex-1">
          {children}
          {/* <MainDashboard /> */}
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
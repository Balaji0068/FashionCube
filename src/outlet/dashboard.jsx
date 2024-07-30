import React from 'react';
import { Outlet } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file
import Header from '../core/components/header';
import Footer from '../core/components/footer';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

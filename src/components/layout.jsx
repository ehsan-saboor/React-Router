import React from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-4xl p-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

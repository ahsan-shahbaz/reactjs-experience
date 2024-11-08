// src/components/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">  {/* Full height and flex column layout */}
      <Header />
      <main className="flex-1 flex"> {/* Main content grows to fill space */}
        {children}
      </main>
      <Footer />  {/* Footer will stick to bottom */}
    </div>
  );
};

export default Layout;

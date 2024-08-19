import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';



const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Content>
          {children}
        </Content>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;

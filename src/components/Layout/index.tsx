import React from 'react';
import styles from './Layout.module.scss';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const Layout = ({ children }: any) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

import React from 'react';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import CodeSeerLogo from '/public/codeseer-logo.png';
import { BellFilledIcon } from '@/components/icons';

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Image src={CodeSeerLogo} alt='CodeSeer Logo' />
        <h3 className='font-semibold text-2xl'>CodeSeer</h3>
      </div>
      <div className={styles.right}>
        <BellFilledIcon fill={'#333'} />
      </div>
    </div>
  );
};

export default Navbar;

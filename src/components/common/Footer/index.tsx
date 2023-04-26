import React from 'react';
import TwitterIcon from '/public/brand-twitter-filled.svg';
import LinkedinIcon from '/public/brand-linkedin.svg';
import GithubIcon from '/public/github-icon.png';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <strong className='font-semibold text-2xl'>CodeSeer</strong>
      <nav className='flex gap-10 text-sm'>
        <Link href='/about'>About</Link>

        <Link href='/contact'>Contact</Link>

        <Link href='#'>Term Of Services</Link>

        <Link href='#'>Privacy Policy</Link>
      </nav>

      <nav className='flex gap-4'>
        <Link href='#'>
          <div className='w-9 rounded-full bg-[#5A99EC] p-2'>
            <Image
              className='w-full h-auto object-contain'
              src={TwitterIcon}
              alt='Footer Twitter Icon'
            />
          </div>
        </Link>

        <Link href='#'>
          <div className='w-9'>
            <Image
              className='w-full h-auto object-contain'
              src={GithubIcon}
              alt='Footer Github Icon'
            />
          </div>
        </Link>

        <Link href='#'>
          <div className='w-9 rounded-md'>
            <Image
              className='w-full h-auto object-contain'
              src={LinkedinIcon}
              alt='Footer Linkedin Icon'
            />
          </div>
        </Link>
      </nav>
      <p className='text-sm'>Copyright @ 2023 CodeSeer. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

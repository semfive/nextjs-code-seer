import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import TwitterIcon from '/public/brand-twitter-filled.svg';
import LinkedinIcon from '/public/brand-linkedin.svg';
import GithubIcon from '/public/github-icon.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <strong className='font-semibold text-2xl'>CodeSeer</strong>
      <ul className='flex gap-10 text-sm'>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
        <li>
          <Link href='#'>Term Of Services</Link>
        </li>
        <li>
          <Link href='#'>Privacy Policy</Link>
        </li>
      </ul>

      <ul className='flex gap-4'>
        <li>
          <div className='w-9 rounded-full bg-[#5A99EC] p-2'>
            <Link href='#'>
              <Image
                className='w-full h-auto object-contain'
                src={TwitterIcon}
                alt='Footer Twitter Icon'
              />
            </Link>
          </div>
        </li>
        <li>
          <div className='w-9'>
            <Link href='#'>
              <Image
                className='w-full h-auto object-contain'
                src={GithubIcon}
                alt='Footer Github Icon'
              />
            </Link>
          </div>
        </li>
        <li>
          <div className='w-9 rounded-md'>
            <Link href='#'>
              <Image
                className='w-full h-auto object-contain'
                src={LinkedinIcon}
                alt='Footer Linkedin Icon'
              />
            </Link>
          </div>
        </li>
      </ul>
      <p className='text-sm'>Copyright @ 2023 CodeSeer. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;

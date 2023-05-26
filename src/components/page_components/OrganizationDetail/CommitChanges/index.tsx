import React from 'react';
import styles from './commit-changes.module.scss';

const CommitChanges = () => {
  return (
    <div className='flex flex-col gap-3'>
      <p className='text-primary_text text-base'>
        NewYork pushed to Battle Maids’ Domain/Dependency Map
      </p>
      <div className={styles.card + ' w-full bg-white rounded-lg py-4 px-3'}>
        <div className='text-primary_text text-sm'>
          1 commit to <span className='text-light_hue_blue'>main</span>
        </div>
        <p className='text-primary_text text-sm'>
          NewYork Install the Magim bot to the codeflow. Leadrn more at{' '}
          <span className='text-light_hue_blue'>https:/codeseer.io</span>
        </p>
      </div>
    </div>
  );
};

export default CommitChanges;

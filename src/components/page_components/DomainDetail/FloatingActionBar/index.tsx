import { PlusIcon, TagIcon } from '@/components/icons';
import React from 'react';

const FloatingActionBar = () => {
  return (
    <section className='absolute top-6 right-6 w-full max-w-[330px] md:w-[330px] flex flex-col gap-[10px] bg-light_white border border-light_gray rounded-md px-2 py-3 z-10'>
      <div className='flex gap-3'>
        <button
          type='button'
          className='py-1 px-2 text-lg font-semibold bg-dark_blue text-white rounded-md'
        >
          Comments
        </button>
        <button
          type='button'
          className='py-1 px-2 text-lg font-semibold bg-white text-darbg-dark_blue rounded-md border border-light_gray hover:bg-dark_blue hover:text-white hover:border-darbg-dark_blue'
        >
          Label
        </button>
      </div>
      <div className='w-full flex flex-col gap-2 bg-white py-1 px-2 border border-light_gray rounded-md'>
        <div className='flex items-center gap-2 text-lg'>
          <TagIcon className='w-5 h-5' /> Name convention
        </div>
        <p className='w-full py-3 px-4 border border-light_gray rounded-lg font-medium'>
          Components and style should be organize in a folder and export through
          index.js file
        </p>
        <div className='text-right text-primary_gray'>22/01/2023</div>
      </div>
      <button
        type='button'
        className='flex items-center gap-2 bg-white py-1 px-2 border border-light_gray rounded-md hover:bg-dark_blue hover:text-white'
      >
        <PlusIcon className='w-5 h-5' />
        <span className='font-medium'>Add new comments</span>
      </button>
    </section>
  );
};

export default FloatingActionBar;

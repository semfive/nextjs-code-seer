import { IOrganization, Organization } from '@/interfaces';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './OrganizationCard.module.scss';

interface IOrganizationCard {
  id?: String;
  organization: IOrganization;
  userId?: String;
  createdAt?: string;
  updatedAt?: string;
}

const OrganizationCard: React.FC<IOrganizationCard> = ({ organization }) => {
  const router = useRouter();

  return (
    <div
      className={
        styles.wrapper +
        ' w-full min-w-[300px] md:w-[300px] rounded-xl overflow-hidden relative'
      }
    >
      <div className='absolute left-0 top-0 bottom-0 w-6 bg-dark_blue'></div>
      <div className='ml-6 py-3 flex flex-col gap-4'>
        <div className='flex flex-col px-3 gap-3'>
          <h4 className='text-xl text-dark_blue font-semibold'>
            {organization.name}
          </h4>
          <p className='text-sm text-primary_text'>Team-managed Software</p>

          <button
            className='text-md_gray font-semibold uppercase w-fit'
            type='button'
            onClick={() => router.push(`/organizations/${organization.id}`)}
          >
            QUICK ACCESS
          </button>
          <div className='text-sm text-primary_text'>
            Domains: <span>{organization.login}</span>
          </div>
          <div className='text-sm text-black flex justify-between'>
            Teams:{' '}
            <span className='bg-dark_blue px-3 py-[2px] rounded-full text-white text-xs'>
              0
            </span>
          </div>
        </div>
        <div className='h-[1px] bg-slate-700' />
        <div className='flex justify-between px-3'>
          Current repo:
          <span>Kenflix</span>
        </div>
      </div>
    </div>
  );
};

export default OrganizationCard;

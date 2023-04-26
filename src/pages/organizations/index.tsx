import { Layout, OrganizationCard } from '@/components';
import { Organization } from '@/interfaces';
import React, { useState } from 'react';
import styles from './organizations.module.scss';

const mockData = new Array<Organization>(4).fill({
  organizationName: 'FPLMS',
  type: 'Team-managed Software',
  domains: 'Analytic tech debt',
  numOfTeams: 2,
  curRepo: 'Kenflix',
});

const organizationTypes = [
  'Onboarding',
  'Maintenance',
  'Migration',
  'Continuous',
];

const OrganizationList = () => {
  const [selectedType, setSelectedType] = useState(organizationTypes[0]);

  return (
    <main className='h-full px-10'>
      <section className='mb-8'>
        <h1 className='text-4xl text-dark_blue font-semibold mt-14 mb-8'>
          Your Organization
        </h1>
        <div className='flex justify-between mb-4'>
          <h3 className='text-2xl font-semibold text-dark_blue'>
            Recent Organizations
          </h3>
          <a className='underline text-primary_blue' href='#' type='button'>
            Create new
          </a>
        </div>

        <div className='flex md:flex-wrap flex-col md:flex-row gap-8'>
          {mockData.map((item, index) => (
            <OrganizationCard key={index} organization={item} />
          ))}
        </div>
      </section>
      <section>
        <ul className='flex  gap-4 text-primary_gray font-semibold'>
          {organizationTypes.map((type) => (
            <li
              key={type}
              className={`cursor-pointer hover:text-dark_blue relative transition-all after:content-[""] after:absolute after:-bottom-[1.5px] after:left-1/2 after:-translate-x-1/2 after:right-0 after:h-1 after:bg-dark_blue after:w-0 hover:after:w-full after:transition-all ${
                selectedType === type ? styles.selected : ''
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </li>
          ))}
        </ul>
        <div className='h-[1px] w-full bg-slate-700' />
      </section>
    </main>
  );
};

export default OrganizationList;

OrganizationList.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

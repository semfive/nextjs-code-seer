import { Layout } from '@/components';
import Link from 'next/link';
import React from 'react';

const OrganizationList = () => {
  return (
    <div>
      OrganizationList
      <Link href='/organizations/1'>Go to detail</Link>
    </div>
  );
};

export default OrganizationList;

OrganizationList.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

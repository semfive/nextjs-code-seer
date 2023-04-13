import { Layout } from '@/components';
import React from 'react';

const OrganizationDetail = () => {
  return <div>OrganizationDetail</div>;
};

export default OrganizationDetail;

OrganizationDetail.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

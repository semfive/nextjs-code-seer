import { AxiosResponse } from 'axios';
import interceptor from './interceptor';
import { ICreateDomain, IRunWorkflow } from '@/interfaces/domain.interface';

export const domainEndpoint = '/domains';

export const retrieveDomains = async () => {
  const res = await interceptor.get('/domains');

  return res.data;
};

export const retrieveMaps = async (domainId: string) => {
  const res = await interceptor.get(`/domains/${domainId}/maps`);

  return res.data;
};

export const runWorkflow = async ({ owner, repository }: IRunWorkflow) => {
  const res = await interceptor.post('/domains/run-workflow', {
    owner,
    repository,
  });

  return res.data;
};

export const createNewDomain = async ({
  teamId,
  payload,
}: ICreateDomain): Promise<any> => {
  const res = await interceptor.post('/domains', {
    teamId,
    payload,
  });

  return res.data;
};

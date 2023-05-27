import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import {
  CaretDown,
  ChevronDown,
  CircleChevronLeft,
  CircleChevronRight,
  PlusIcon,
  SettingsIcon,
} from '../../../icons';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { retrieveTeams, teamEndpoint } from '@/services/team.service';
import { ITeam } from '@/interfaces/team.interface';
import { domainEndpoint, retrieveDomains } from '@/services/domain.service';
import { IDomain } from '@/interfaces/domain.interface';
import CreateTeamForm from '../CreateTeamForm';
import CreateDomainForm from '../CreateDomainForm';
import { useAppDispatch, useAppSelector } from '@/redux/reduxHooks';
import { setDomain } from '@/redux/slices/domainSlice';
import ButtonFilled from '@/components/common/ButtonFilled';

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const domain = useAppSelector((state) => state.domain.domain);
  const { organizationId } = router.query;

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [domainsCollapsed, setDomainsCollapsed] = useState(false);
  const [teamsCollapsed, setTeamsCollapsed] = useState(false);

  const [showCreateTeam, setShowCreateTeam] = useState(false);
  const [showCreateDomain, setShowCreateDomain] = useState(false);

  const {
    data: teams,
    error: teamsErr,
    isLoading: isTeamLoading,
    mutate: mutateTeam,
  } = useSWR(teamEndpoint, retrieveTeams);
  const {
    data: domains,
    error: domainsErr,
    isLoading: isDomainsLoading,
    mutate: mutateDomain,
  } = useSWR(domainEndpoint, retrieveDomains);

  // if (isTeamLoading || isDomainsLoading) return <h1>Loading</h1>;

  return (
    <>
      {showCreateTeam && (
        <CreateTeamForm
          setIsShown={setShowCreateTeam}
          orgId={organizationId}
          mutate={mutateTeam}
        />
      )}
      {showCreateDomain && teams && (
        <CreateDomainForm
          setIsShown={setShowCreateDomain}
          teams={teams.data}
          mutate={mutateDomain}
          domains={domains.data}
        />
      )}
      <aside
        id={styles.wrapper}
        className={`w-0 relative overflow-x-hidden bg-white transition-all duration-300 ${
          isCollapsed ? 'md:w-[30px]' : 'md:w-[340px] '
        }`}
      >
        <button
          id={styles.btn}
          className='absolute right-3 top-28 text-md_gray'
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <CircleChevronLeft
            fill='#fff'
            className={`fixed transition duration-300 ${
              isCollapsed ? 'rotate-180' : ''
            }`}
          />
        </button>
        <div className='flex-grow flex-shrink-0 flex flex-col gap-6 px-6 whitespace-nowrap'>
          <div>
            <button className='text-primary_text font-semibold flex items-center'>
              FPLMS
              <span className=' ml-4 text-dark_blue'>
                <CaretDown width='20' height='20' />
              </span>
            </button>
            <p className='text-md_gray text-sm'>Software Project</p>
          </div>
          <div className='h-[1px] w-full bg-primary_gray'></div>

          <section>
            <div className='flex justify-between'>
              <button
                className='flex gap-2 text-xl text-dark_blue font-semibold items-center mb-2'
                onClick={() => setDomainsCollapsed(!domainsCollapsed)}
              >
                <span>
                  <ChevronDown
                    width='20'
                    height='20'
                    className={`transition-all ${
                      domainsCollapsed ? '-rotate-90' : ''
                    }`}
                  />
                </span>
                Domains
              </button>
              <button>
                <PlusIcon
                  className='w-5 h-5 hover:scale-125 transition'
                  onClick={() => setShowCreateDomain(true)}
                />
              </button>
            </div>

            <ul
              className={`pl-7 flex flex-col gap-2 overflow-hidden transition-all ease-in-out ${
                domainsCollapsed ? 'max-h-0' : 'max-h-[400px]'
              }`}
            >
              {domains?.data?.map((domain: IDomain) => (
                <li className='text-md_gray' key={domain.domainId}>
                  <button
                    className='w-fit hover:underline hover:font-semibold hover:text-dark_blue'
                    onClick={() => {
                      dispatch(setDomain(domain));
                      router.push(
                        `/organizations/${organizationId}/${domain.domainId}`
                      );
                    }}
                  >
                    {domain.domain.name}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className='flex justify-between'>
              <button
                className='flex gap-2 text-xl text-dark_blue font-semibold items-center mb-2'
                onClick={() => setTeamsCollapsed(!teamsCollapsed)}
              >
                <span>
                  <ChevronDown
                    width='20'
                    height='20'
                    className={`transition-all ${
                      teamsCollapsed ? '-rotate-90' : ''
                    }`}
                  />
                </span>
                Teams
              </button>
              <button>
                <PlusIcon
                  className='w-5 h-5 hover:scale-125 transition'
                  onClick={() => setShowCreateTeam(true)}
                />
              </button>
            </div>
            <ul
              className={`pl-7 flex flex-col gap-2 overflow-hidden transition-all ease-in-out ${
                teamsCollapsed ? 'max-h-0' : 'max-h-[400px]'
              }`}
            >
              {teams?.data?.map((team: ITeam) => (
                <li className='text-md_gray' key={team.id}>
                  <button
                    className='w-fit hover:underline hover:font-semibold hover:text-dark_blue'
                    onClick={() =>
                      router.push(`/organizations/${organizationId}/teams/1`)
                    }
                  >
                    {team.name}
                  </button>

                  <ButtonFilled>Join</ButtonFilled>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <button className='w-full flex justify-between gap-2 text-xl text-dark_blue font-semibold items-center'>
              <div className='flex gap-2 items-center'>
                <span>
                  <SettingsIcon width='20' height='20' />
                </span>
                Organization Settings
              </div>
              <span className='self-end'>
                <CircleChevronRight width='20' height='20' />
              </span>
            </button>
          </section>
        </div>
        <footer className='w-full text-center self-end whitespace-nowrap'>
          <p className='text-sm text-primary_text'>
            You&apos;re in a domain managed place
          </p>
          <strong className='text-md_gray text-sm hover:cursor-pointer'>
            Learn more
          </strong>
        </footer>
      </aside>
    </>
  );
};

export default Sidebar;

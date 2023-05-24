export interface Organization {
  organizationName: string;
  type: string;
  domains: string;
  numOfTeams: number;
  curRepo: string;
}

export interface IOrganization {
  id: string;
  name: string;
  login: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ICreateOrganization {
  login: string;
  name: string;
  description: string;
}

export interface IInviteMemberToOrg {
  organizationId: string;
  memberEmail: string;
}

export interface IJoinOrg {
  orgId: string;
  invitationId: string;
}

export interface IOrganization {
  id: string;
  userId: string;
  organizationId: string;
  createdAt?: string;
  updatedAt?: string;
  organization: {
    id: string;
    login: string;
    name: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
  };
}

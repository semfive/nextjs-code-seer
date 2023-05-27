export interface ITeam {
  id: string;
  organizationId: string;
  teamId: string;
  team: {
    id: string;
    login: string;
    name: string;
    createdAt?: string;
    updatedAt?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface ICreateTeam {
  orgId: string;
  payload: {
    login: string;
    name: string;
  };
}

export interface IJoinTeam {
  url: string;
  orgId: string;
  teamId: string;
}

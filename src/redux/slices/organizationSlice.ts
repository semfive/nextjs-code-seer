import { IOrganization } from '@/interfaces';
import { IDependencyMap } from '@/interfaces/dependency-map.interface';
import { IDomain } from '@/interfaces/domain.interface';
import { ITeam } from '@/interfaces/team.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OrganizationSlice {
  organization?: IOrganization;
  domains: IDomain[];
  teams: ITeam[];
}

const initialState: OrganizationSlice = {
  domains: [],
  teams: [],
};

const domainSlice = createSlice({
  name: 'domain',
  initialState,
  reducers: {
    setOrganization: (state, action: PayloadAction<IOrganization>) => {
      state.organization = action.payload;
    },
  },
});

export const { setOrganization } = domainSlice.actions;
export default domainSlice.reducer;

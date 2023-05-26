import { IDependencyMap } from '@/interfaces/dependency-map.interface';
import { IDomain } from '@/interfaces/domain.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DomainSlice {
  domain?: IDomain;
  dependencyMaps: IDependencyMap[];
}

const initialState: DomainSlice = {
  dependencyMaps: [],
};

const domainSlice = createSlice({
  name: 'domain',
  initialState,
  reducers: {
    setDomain: (state, action: PayloadAction<IDomain>) => {
      state.domain = action.payload;
    },
    setDependencyMaps: (state, action: PayloadAction<IDependencyMap[]>) => {
      state.dependencyMaps = action.payload;
    },
  },
});

export const { setDomain, setDependencyMaps } = domainSlice.actions;
export default domainSlice.reducer;

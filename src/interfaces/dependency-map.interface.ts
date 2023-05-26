export interface IDependencyMap {
  id: string;
  type: string;
  payload: {
    modules: [];
    summary: {
      error: number;
      ignore: number;
      info: number;
      totalCruised: number;
      totalDependenciesCruised: number;
      warn: number;
    };
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface IModule {
  source: string;
  orphan: boolean;
  valid: boolean;
  dependencies: IDependency[];
  dependents: string[];
}

export interface IDependency {
  circular: boolean;
  coreModule: boolean;
  couldNotResolve: boolean;
  dependencyTypes: string[];
  dynamic: boolean;
  exoticallyRequired: boolean;
  followable: boolean;
  matchesDoNotFollow: boolean;
  module: string;
  moduleSystem: string;
  resolved: string;
  valid: boolean;
}

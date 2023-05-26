import { IDependency } from '@/interfaces/dependency-map.interface';

export interface INodePayload {
  source: string;
  orphan: boolean;
  valid: boolean;
}

export interface IEdgePayload extends IDependency {
  from: string;
  to: string;
}

export interface IResult {
  name: string;
  children: IResult[];
}

export interface IMainData {
  nodes: INodePayload[];
  edges: IEdgePayload[];
}

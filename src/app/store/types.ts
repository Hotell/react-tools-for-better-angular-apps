import { Epic } from 'redux-observable';

export interface EpicsService {
  getEpic(): Epic<any, any>;
}

import { AxiosResponse } from 'axios';

export const normalizeData = <T>(response: AxiosResponse<T>) => response.data;

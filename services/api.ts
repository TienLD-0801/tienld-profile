import { API_ROUTES } from '@/shared/constants/router';
import { ProjectData } from '@/shared/types/project';
import axios, { AxiosError, AxiosInstance } from 'axios';

/** Setting timeout of axios */
const AXIOS_TIMEOUT: number = 10000;

/** API url */
const BASE_URL: string = process.env.NEXT_PUBLIC_URL || '';

class AxiosClient {
  private axios: AxiosInstance;
  public exception: AxiosError | undefined;
  private config = {
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    },
  };

  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
      timeout: AXIOS_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    this.axios.interceptors.request.use(
      async (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  // api get Project
  async apiGetProject(): Promise<{ result: ProjectData[] }> {
    try {
      const response = await this.axios.get<{ result: ProjectData[] }>(
        API_ROUTES.GET_PROJECT
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const axiosClient = new AxiosClient();

export default axiosClient;

import { APP_SAVE_KEY } from '@/utils/constants';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';

class Axios {
  private api: AxiosInstance;

  constructor(baseURL: string, noAuth: boolean) {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!noAuth) {
      this.api.interceptors.request.use(
        (config) => {
          const accessToken = this.getAccessToken();
          if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    }

    this.handleResponse(this.api)
  }

  handleResponse(axios: AxiosInstance) {
    axios.interceptors.response.use(
      async (response: AxiosResponse) => {
        const originalRequest = response.config
        if (typeof window !== 'undefined') {
          const statusCode = response.data.statusCode
          switch (statusCode) {
            case 403:
              window.location.href = '/login'
              deleteCookie(APP_SAVE_KEY.TOKEN_KEY)
              break;
            case 401:
              try {
                // this.api.request(originalRequest)
              } catch (e) {
                // window.location.href = '/login'
              }
              break;
            default:
              break;
          }
        }
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 403 && typeof window !== 'undefined') {
          window.location.href = '/login'
          deleteCookie(APP_SAVE_KEY.TOKEN_KEY)
        }
        if (error.response.status === 401 && typeof window !== 'undefined') {
          try {
            // this.api.request(originalRequest)
          } catch (e) {
            window.location.href = '/login'
          }
        }
        return Promise.reject(error);
      }
    );
  }
  async get<T>(url: string, configs?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.api.get<T>(url, configs);
      return response.data;
    } catch (error) {
      console.error('GET request failed:', error);
      throw error;
    }
  }

  async post<T>(url: string, data: any, configs?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.api.post<T>(url, data, configs);

      return response.data;
    } catch (error) {
      console.error('POST request failed:', error);
      throw error;
    }
  }

  async put<T>(url: string, data?: any, configs?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.api.put<T>(url, data, configs);
      return response.data;
    } catch (error) {
      console.error('PUT request failed:', error);
      throw error;
    }
  }

  async delete<T>(url: string, configs?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.api.delete<T>(url, configs);
      return response.data;
    } catch (error) {
      console.error('DELETE request failed:', error);
      throw error;
    }
  }

  private getAccessToken(): string {
    return getCookie(APP_SAVE_KEY.TOKEN_KEY) as string
  }
}


export const axiosProductInstance = new Axios(process.env.NEXT_PUBLIC_PRODUCT_API || 'http://localhost:9001/api', false);
export const axiosUserInstance = new Axios(process.env.NEXT_PUBLIC_USER_API || 'http://localhost:9002/api', false);
export const axiosPaymentInstance = new Axios(process.env.NEXT_PUBLIC_PAYMENT_API || 'http://localhost:9003/api', false);
export const axiosOrderInstance = new Axios(process.env.NEXT_PUBLIC_ORDER_API || 'http://localhost:9004/api', false);
export const axiosChatBotInstance = new Axios(process.env.NEXT_PUBLIC_CHATBOT_API || 'http://localhost:9005/api', false);
export const axiosInstanceNoAuth = new Axios(process.env.NEXT_PUBLIC_DEV_API_URL || 'http://localhost:3001', true);

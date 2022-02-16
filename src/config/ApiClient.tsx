import axios from 'axios';
import { QueryClient } from 'react-query';

export const apiClient = axios.create({ baseURL: 'https://www.googleapis.com' });

export const queryClient = new QueryClient();

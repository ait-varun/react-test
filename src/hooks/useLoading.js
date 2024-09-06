import { useContext } from 'react';
import { LoadingContext } from '../components/loadingProvider';


export const useLoading = () => {
  return useContext(LoadingContext);
};
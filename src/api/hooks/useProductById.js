import { useQuery } from '@tanstack/react-query';
import { api } from '..';

export const useProductById = (id) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => api.get(`/products/${id}`).then(res => res.data), 
    enabled: !!id,
  });
};

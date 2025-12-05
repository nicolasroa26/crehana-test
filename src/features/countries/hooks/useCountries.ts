import { useQuery } from '@apollo/client/react';
import { GET_COUNTRIES } from '../api/countries.queries';
import type { Country } from '../api/countries.types';

export function useCountries() {
  const { data, loading, error } = useQuery<{ countries: Country[] }>(GET_COUNTRIES);

  return {
    countries: data?.countries ?? [],
    loading,
    error: error ?? null,
  };
}

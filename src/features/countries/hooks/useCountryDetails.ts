import { useQuery } from '@apollo/client/react';
import { GET_COUNTRY } from '../api/countries.queries';
import type { Country } from '../api/countries.types';

interface GetCountryResponse {
  country: Country | null;
}

export function useCountryDetails(code: string) {
  const { data, loading, error } = useQuery<GetCountryResponse>(GET_COUNTRY, {
    variables: { code },
  });

  return {
    country: data?.country ?? null,
    loading,
    error: error ?? null,
  };
}

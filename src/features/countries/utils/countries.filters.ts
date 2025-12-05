import type { Country, CountryFilterState } from '../api/countries.types';

export function filterCountries(countries: Country[], filters: CountryFilterState): Country[] {
  const { search, continent, currency } = filters;

  return countries.filter((country) => {
    const matchesSearch = search ? country.name.toLowerCase().includes(search.toLowerCase()) : true;

    const matchesContinent = continent
      ? country.continent.name === continent || country.continent.code === continent
      : true;

    const matchesCurrency = currency
      ? country.currency?.toLowerCase() === currency.toLowerCase()
      : true;

    return matchesSearch && matchesContinent && matchesCurrency;
  });
}

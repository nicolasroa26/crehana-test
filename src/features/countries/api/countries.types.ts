export interface Continent {
  code: string;
  name: string;
}

export interface Country {
  code: string;
  name: string;
  currency: string | null;
  capital: string | null;
  continent: Continent;
}

export interface CountryFilterState {
  search: string;
  continent: string;
  currency: string;
}

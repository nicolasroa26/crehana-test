export interface Continent {
  code: string;
  name: string;
}

export interface Language {
  code: string;
  name: string;
}

export interface Country {
  code: string;
  name: string;
  currency: string | null;
  capital: string | null;
  continent: Continent;
  languages: Language[];
}

export interface CountryFilterState {
  search: string;
  continent: string;
  currency: string;
}

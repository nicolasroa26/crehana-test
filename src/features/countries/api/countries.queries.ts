import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      currency
      capital
      languages {
        code
        name
      }
      continent {
        code
        name
      }
    }
  }
`;

export const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      currency
      capital
      continent {
        code
        name
      }
      languages {
        code
        name
      }
    }
  }
`;

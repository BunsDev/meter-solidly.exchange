import { gql } from 'graphql-request'

export const GET_PAIRS = gql`
  query getPairs {
    pairs {
      id
 
      stable
      token0 {
        id
        symbol
        decimals
      }

      token1 {
        id
        symbol
        decimals
      }
    }
  }
`;

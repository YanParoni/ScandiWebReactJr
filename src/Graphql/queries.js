import { gql } from "@apollo/client";

export const getItems = gql`
  query {
    category {
      products {
        name
        gallery
        inStock
        prices {
          currency
          amount
        }
        category
        description
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`;

export const getAllProducts = gql`
  query {
    category {
      name
      products {
        id
        name
        gallery
        inStock
        description
        prices {
          currency
          amount
        }
        attributes {
          id
          name
          type
          items {
            value
            displayValue
            id
          }
          items {
            displayValue
            value
            id
          }
        }
        brand
      }
    }
  }
`;

export const getItemsByCategory = gql`
  query getItemsByCategory($title: String!) {
    category(input: { title: $title }) {
      products {
        id
        name
        gallery
        inStock
        prices {
          currency
          amount
        }
        category
        description
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`;

export const getCategories = gql`
  query {
    categories {
      name
    }
  }
`;

export const getCurrencies = gql`
  query {
    currencies
  }
`;

export const getItemsById = gql`
query getItemsById($id: String!) {
  product(id: $id ) {
    id
    name
    gallery
    inStock
    prices {
      currency
      amount
    }
    category
    description
    attributes {
      id
      name
      type
      items {
        displayValue
        value
        id
      }
    }
  }

}
`;
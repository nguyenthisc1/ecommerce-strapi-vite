import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
    query getProducts {
        products {
            data {
                id
                attributes {
                    title
                    description
                    quantity
                    images {
                        data {
                            id
                            attributes {
                                url
                            }
                        }
                    }
                    categories {
                        data {
                            id
                            attributes {
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const GET_PRODUCT = gql`
    query getProduct($productId: ID!) {
        product(id: $productId) {
            data {
                id
                attributes {
                    title
                    description
                    quantity
                    images {
                        data {
                            id
                            attributes {
                                url
                            }
                        }
                    }
                    categories {
                        data {
                            id
                            attributes {
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const GET_CATEGORY = gql`
    query getCategories {
        categories {
            data {
                id
                attributes {
                    name
                }
            }
        }
    }
`;

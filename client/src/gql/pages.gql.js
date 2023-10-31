import { gql } from '@apollo/client';


export const GET_HOME_CONTENT = gql`
    query getHomeContent($locale: I18NLocaleCode) {
        home(locale: $locale) {
            data {
                attributes {
                    hero_title
                    hero_description
                    hero_text_horizontal
                    product_intro_title
                    product_intro_description
                    product_intro_description_2
                    product_list_title
                }
            }
        }
    }
`;

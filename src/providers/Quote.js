import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { updateQuotes } from '../actions/updateQuotes';

export const emptyQuotes = [
  {
    description: 'Loading..',
    author: '',
  },
];

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

export const getRandomQuote = (quotes) => {
  console.log('getRandomQuote:' + quotes.length);
  const index = Math.floor(Math.random() * quotes.length);
  console.log('index:' + index);
  return quotes[index];
};

export const getQuotes = () => async (dispatch) => {
  console.log('getQuotes..');
  const response = await client.query({
    query: gql`
      query Get {
        quotes {
          description
          author
        }
      }
    `,
  });
  console.log('getQuotes:' + JSON.stringify(response.data));
  const quotes = [];
  for (let one of response.data.quotes) {
    quotes.push({
      description: one.description,
      author: one.author,
    });
  }
  console.log('getQuotes:' + JSON.stringify(quotes));
  dispatch(updateQuotes(quotes));
};

export class QuoteProvider {
  static async postQuote(quote) {
    console.log('quote:' + JSON.stringify(quote));
    return;
  }

  static async putQuote(quote) {
    console.log('quote:' + JSON.stringify(quote));
    return;
  }

  static async deleteQuote(quote) {
    console.log('quote:' + JSON.stringify(quote));
    return;
  }
}

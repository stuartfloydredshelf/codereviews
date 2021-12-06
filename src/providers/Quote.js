import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { updateQuotes } from '../actions/updateQuotes';
import { addedQuote } from '../actions/addedQuote';

export const emptyQuotes = [
  {
    description: 'Loading..',
    author: '',
  },
];

const client = new ApolloClient({
  uri: 'https://uijm5u5vnk.execute-api.us-east-1.amazonaws.com/dev',
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
          id
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

export const addQuote = (author, description) => async (dispatch) => {
  const quote = {id: 300, author: author, description: description};
  dispatch(addedQuote(quote));
};

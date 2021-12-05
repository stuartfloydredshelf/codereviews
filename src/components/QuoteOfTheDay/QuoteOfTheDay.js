import React from 'react';
import './QuoteOfTheDay.css';
import { updateQuote } from '../../actions/updateQuote';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { getRandomQuote } from '../../providers/Quote';

const QuoteOfTheDay = () => {
  const dispatch = useDispatch();
  let quotes = useSelector((state) => state.quotes);
  let quote = useSelector((state) => state.quote);
  if (quote == undefined) {
    quote = { author: 'Stuart', description: "Redshelf campus tools and partner are the best. Now, it's time for us to build great things." };
  }
  if (quotes == undefined) {
    quotes = [quote];
  }
  let quoteLength = quotes.length;

  return (
    <div className="QuoteOfTheDay">
      <br />
      <br />
      <br />
      <div>
        {' '}
        {quoteLength} quote{quoteLength == 1 ? '' : 's'} available.
      </div>
      <h1>Motivations for today</h1>
      <br />
      <br />
      <blockquote>{quote.description}</blockquote>
      <br />
      <br />
      <h4>- {quote.author}</h4>
      <br />
      <br />
      <Button
        variant="outlined"
        onClick={() => dispatch(updateQuote(getRandomQuote(quotes)))}
      >
        So good. Give me another.
      </Button>
    </div>
  );
};

export default QuoteOfTheDay;

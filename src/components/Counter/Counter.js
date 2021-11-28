import React from 'react';
import styles from './Counter.module.css';

const sentence = "I like to code because coding is fun. Ok, not really, but it pays the bills.";

const Counter = () => {
  var rows = [];
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; i++) {
    rows.push(<li key={i}>{words[i]}</li>);
  }
  return <ul>{rows}</ul>;
}

Counter.propTypes = {};

Counter.defaultProps = {};

export default Counter;

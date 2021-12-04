import React from "react";
import updateMotivator from "../../actions/updateMotivator";
import { useSelector, useDispatch } from "react-redux";

const sentences =
[
  "Opportunity. Just because your ship came in doesn't mean you're going places.",
  "Experts. We've got a talent for explaining tomorrow why the predictions we made yesterday didn't come true.",
  "Attitude. If you can't handle me at my worst, you deserve to know it's also my best.",
  "Frustration. When all else fails, look to the healing power of brute force.",
  "Go away. Your absence would make my heart grow fonder.",
  "Gratitude. Don't thank us for cutting you down, thank us for giving you new chances for groth.",
  "Believe. Don't let anyone tell you that dreams can't come true; my life's turned into a long, waking nightmare.",    
  "Complacency. Because certain things are worth fighting for, in a certain way, up to a certain point.",
  "Narcissism. The greatest self-esteem problem of our time is that too many have too much of it.",
  "Dedication. When the time comes for us to burn the candle at both ends, we're grateful you're here, being our candle."
];

function getRandomSentence() {
return sentences[Math.floor(Math.random() * sentences.length)];
}

const Counter = () => {
  const dispatch = useDispatch();
  const sentence = useSelector((state) => state.sentence);
  if (sentence == "Default") {
    dispatch(updateMotivator(getRandomSentence()));
  }
  return (
    <div>
      <h1>Motivation for today</h1>
      <h4>{sentence}</h4>
    <button onClick={() => dispatch(updateMotivator(getRandomSentence()))}>
      This is good. Give me another.
    </button>
    </div>
  );
}

export default Counter;

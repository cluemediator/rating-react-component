import React, { useState } from "react";
import Rating from "react-rating";

function App() {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);

  return (
    <div className="App">
      <h3>Rating Component - <a href="https://cluemediator.com/" target="_blank">Clue Mediator</a></h3>

      <strong>Example 1</strong>
      <Rating
        initialRating={rating1}
        onClick={rate => setRating1(rate)}
      />
      <p>Rating: {rating1}</p>

      <strong>Example 2</strong>
      <Rating
        fractions={2}
        stop={10}
        initialRating={rating2}
        onClick={rate => setRating2(rate)}
      />
      <p>Rating: {rating2}</p>

      <strong>Example 3</strong>
      <Rating
        fractions={2}
        emptySymbol="fa fa-star-o fa-2x star"
        fullSymbol="fa fa-star fa-2x star"
        initialRating={rating3}
        onClick={rate => setRating3(rate)}
      />
      <p>Rating: {rating3}</p>

    </div>
  );
}

export default App;

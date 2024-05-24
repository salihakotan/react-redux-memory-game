import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetGame,
  selectCards,
  selectLeftCards,
  updateScore,
  updateStat,
} from "../redux/cards/cardsSlice";

import Card from "./Card";

function Cards() {
  const cardsSelector = useSelector(selectCards);
  const leftCards = useSelector(selectLeftCards);

  const [prev, setPrev] = useState(-1);

  const dispatch = useDispatch();

  const check = (current) => {
    if (cardsSelector[current].id === cardsSelector[prev].id) {
      //correct
      dispatch(updateScore(50));
      dispatch(updateStat({ id: current, stat: "correct" }));
      dispatch(updateStat({ id: prev, stat: "correct" }));
      setPrev(-1);
    } else {
      //wrong
      dispatch(updateScore(-10));
      dispatch(updateStat({ id: current, stat: "wrong" }));
      dispatch(updateStat({ id: prev, stat: "wrong" }));
      setPrev(-1);
      setTimeout(() => {
        dispatch(updateStat({ id: current, stat: "" }));
        dispatch(updateStat({ id: prev, stat: "" }));
      }, 1000);
    }
  };

  const handleClick = (id) => {
    if (prev === -1) {
      dispatch(updateStat({ id, stat: "active" }));
      setPrev(id);
    } else {
      check(id);
    }
  };

  return (
    <>
     

      <div className="container">
        {cardsSelector.map((card, index) => (
          <Card key={index} id={index} item={card} handleClick={handleClick} />
        ))}
      </div>

      {leftCards <= 0 && (
        <div className="playAgainDiv"> <button className="playAgainBtn" onClick={() => dispatch(resetGame())}>Play Again</button></div>
      )}
    </>
  );
}

export default Cards;

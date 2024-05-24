import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCards, updateStat } from "../redux/cards/cardsSlice";

import Card from "./Card";

function Cards() {

  const cardsSelector = useSelector(selectCards)

  const [prev, setPrev] = useState(-1);

  const dispatch = useDispatch()


  const check = (current) => {
    if (cardsSelector[current].id === cardsSelector[prev].id) {
      dispatch(updateStat({id:current,stat:"correct"}))
      dispatch(updateStat({id:prev,stat:"correct"}))
      setPrev(-1);
    } else {
      dispatch(updateStat({id:current,stat:"wrong"}))
      dispatch(updateStat({id:prev,stat:"wrong"}))
      setTimeout(() => {
        dispatch(updateStat({id:current,stat:""}))
        dispatch(updateStat({id:prev,stat:""}))
        setPrev(-1);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    if (prev === -1) {
      dispatch(updateStat({id,stat:"active"}))
      setPrev(id);
      
    } else {
      check(id);
    }
  };

  return (
    <div className="container">
      {cardsSelector.map((card, index) => (
        <Card key={index} id={index} item={card} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Cards;

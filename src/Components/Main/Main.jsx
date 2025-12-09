import React from "react";
import Traveler from "./Components_2/Traveler/Traveler";
import Galery from "./Components_2/Galery/Galery";

function Main({ cards, onUpdateCard, onCreateCard, onDeleteCard }) {
  return (
    <main className="main-content">
      <Traveler onCreateCard={onCreateCard} />
      <Galery cards={cards} onUpdateCard={onUpdateCard} onDeleteCard={onDeleteCard}/>
    </main>
  );
}

export default Main;

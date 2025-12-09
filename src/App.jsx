import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import api from "./Components/dataprovider/api";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadCards() {
      try {
        const data = await api.getAllCards();
        setCards(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadCards();
  }, []);

  // --- ACTUALIZAR LIKE (USAS ESTE)
  async function handleUpdateCard(card) {
    try {
      const updatedCard = await api.updateLike(card._id);

      setCards((cards) =>
        cards.map((c) => (c._id === card._id ? updatedCard : c))
      );
    } catch (error) {
      console.error(error);
    }
  }

  // --- BORRAR TARJETA
  async function handleDeleteCard(card) {
    try {
      await api.deleteCard(card._id);
      setCards((cards) => cards.filter((c) => c._id !== card._id));
    } catch (error) {
      console.error(error);
    }
  }

  // --- CREAR TARJETA
  async function handleCreateCard(newCard) {
    try {
      const createdCard = await api.createCard(newCard);
      setCards((cards) => [createdCard, ...cards]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>
        <Header />
        <Main
          cards={cards}
          onUpdateCard={handleUpdateCard}
          onCreateCard={handleCreateCard}
          onDeleteCard={handleDeleteCard}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;

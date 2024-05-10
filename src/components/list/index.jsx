import React, { useEffect, useState } from "react";
import Card from "../card";
import {
  Button,
  Container,
  Footer,
  Header,
  Wrapper,
  CardContainer,
  ButtonPrimary,
  ButtonContainer,
  Box,
  CircleButton,
  Input,
} from "./style";
import api from "../../utils/api";

const List = ({ title, id, createdAt, cards, allLabels, onDrop }) => {
  const [newCardTitle, setNewCardTitle] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const initialCards = cards || [];
  const [cardList, setCardList] = useState(initialCards);
  const numberOfCards = cardList.length;

  useEffect(() => setCardList(cards || []), [cards]);

  const handleInputChange = (e) => {
    setNewCardTitle(e.target.value);
  };
  const handleAddCard = () => {
    if (newCardTitle.trim() !== "") {
      const newCard = {
        createdAt: new Date().toISOString(),
        title: newCardTitle,
        description: "",
        startDate: null,
        dueDate: null,
        label: {},
        id: Date.now().toString(),
      };
      const updateCardList = [...cardList, newCard];
      setCardList(updateCardList);
      postCardList(updateCardList);
    }
  };
  const postCardList = async (updateCardList) => {
    try {
      setIsInputVisible(false);
      await api.put(`lists/${id}`, {
        listTitle: title,
        createdAt: createdAt,
        cards: updateCardList,
      });
      setNewCardTitle("");
    } catch (e) {
      console.error("Fail to update cards in list", e);
    }
  };
  const handleDeleteCard = async (cardId) => {
    const updateCardList = cardList.filter((card) => card.id !== cardId);
    try {
      await api.put(`lists/${id}`, {
        listTitle: title,
        createdAt: createdAt,
        cards: updateCardList,
      });
      setCardList(updateCardList);
    } catch (e) {
      console.error("Fail to delete card from list", e);
    }
  };
  const handleEditCard = async (cardId, editedCard) => {
    const updatedCardList = cardList.map((card) =>
      card.id === cardId ? { ...card, ...editedCard } : card
    );

    try {
      await api.put(`lists/${id}`, {
        listTitle: title,
        createdAt: createdAt,
        cards: updatedCardList,
      });
      setCardList(updatedCardList);
    } catch (e) {
      console.error("Fail to edit card in list", e);
    }
  };

  const handleDrop = (sourceListId, card) => {
    console.log(card);
    onDrop(sourceListId, id, card);
  };
  return (
    <Wrapper>
      <Container>
        <Header>
          <Box>
            <h3>{title}</h3>
            <div>
              <CircleButton>{numberOfCards}</CircleButton>
            </div>
          </Box>
          <div>
            <Button>
              <i className="fa-solid fa-ellipsis"></i>
            </Button>
          </div>
        </Header>
        <CardContainer>
          {cardList.map((item, index) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                createdAt={item.createdAt}
                description={item.description}
                title={item.title}
                startDate={item.startDate}
                dueDate={item.dueDate}
                labels={item.labels}
                onDelete={() => handleDeleteCard(item.id)}
                onEdit={handleEditCard}
                allLabels={allLabels}
                listId={id}
                onDrop={handleDrop}
              />
            );
          })}
          {isInputVisible ? (
            <Input
              type="text"
              placeholder="Enter card title..."
              value={newCardTitle}
              onChange={handleInputChange}
            ></Input>
          ) : null}
        </CardContainer>
        <Footer>
          {isInputVisible ? (
            <ButtonContainer>
              <div>
                <ButtonPrimary onClick={handleAddCard}>
                  <i className="fa-solid fa-plus"></i>
                  <span> Add card</span>
                </ButtonPrimary>
              </div>
              <div>
                <Button onClick={() => setIsInputVisible(false)}>
                  <i className="fa-solid fa-xmark"></i>
                </Button>
              </div>
            </ButtonContainer>
          ) : (
            <Button onClick={() => setIsInputVisible(true)}>
              <i className="fa-solid fa-plus"></i>
              <span> Add a card</span>
            </Button>
          )}
        </Footer>
      </Container>
    </Wrapper>
  );
};

export default List;

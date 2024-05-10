import React, { useEffect, useState } from "react";
import List from "../list";
import Navbar from "../navbar";
import {
  Box,
  BoxContainer,
  Button,
  ButtonCancel,
  ButtonContainer,
  ButtonPrimary,
  ButtonWrapper,
  Container,
  Footer,
  Input,
  Wrapper,
} from "./style";
import api from "../../utils/api";

const Board = () => {
  const [lists, setLists] = useState([]);
  const [allLabels, setAllLabels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [newListTitle, setNewListTitle] = useState("");

  const getList = async () => {
    let response = await api.get("lists");
    if (response.status === 200) {
      console.log(response);
      setLists(response.data);
      setLoading(false);
    }
  };

  const getAllLabels = async () => {
    let response = await api.get("labels");
    if (response.status === 200) {
      console.log(response);
      setAllLabels(response.data);
    }
  };

  useEffect(() => {
    getList();
    getAllLabels();
  }, [loading]);

  const handleInputChange = (e) => {
    setNewListTitle(e.target.value);
  };
  const addList = async () => {
    try {
      if (newListTitle.trim() !== "") {
        const newList = {
          listTitle: newListTitle,
          createdAt: new Date().toISOString(),
          cards: [],
        };
        const response = await api.post("lists", newList);
        if (response.status === 201) {
          const updatedLists = [...lists, response.data];
          setLists(updatedLists);
          setNewListTitle("");
          setIsInputVisible(false);
        }
      }
    } catch (e) {
      console.error("Failed to add list", e);
    }
  };

  const handleDrop = async (sourceListId, destinationListId, card) => {
    try {
      const updatedLists = lists.map((list) => {
        if (list.id === sourceListId) {
          const updatedCards = list.cards.filter((c) => c.id !== card.id);
          return { ...list, cards: updatedCards };
        }

        if (list.id === destinationListId) {
          const cardExists = list.cards.some((c) => c.id === card.id);
          if (!cardExists) {
            return {
              ...list,
              cards: [...list.cards, card],
            };
          }
        }

        return list;
      });
      const destinationList = updatedLists.find(
        (list) => list.id === destinationListId
      );
      if (!destinationList.cards.some((c) => c.id === card.id)) {
        setLists(updatedLists);
      }

      await api.put(`lists/${destinationListId}`, {
        cards: updatedLists.find((list) => list.id === destinationListId).cards,
      });
      await api.put(`lists/${sourceListId}`, {
        cards: updatedLists.find((list) => list.id === sourceListId).cards,
      });
    } catch (e) {
      console.error("Fail to drag and drop list", e);
    }
  };

  return (
    <Wrapper>
      <Navbar />
      {loading ? (
        <div></div>
      ) : (
        <Container>
          {lists.map((item, index) => {
            return (
              <List
                key={item.id}
                title={item.listTitle}
                id={item.id}
                cards={item.cards}
                createdAt={item.createdAt}
                allLabels={allLabels}
                onDrop={handleDrop}
              />
            );
          })}
          <BoxContainer>
            {isInputVisible ? (
              <Box>
                <Input
                  type="text"
                  placeholder="Enter list title"
                  name="listTitle"
                  value={newListTitle}
                  onChange={handleInputChange}
                ></Input>
                <ButtonContainer>
                  <div>
                    <ButtonPrimary onClick={addList}>
                      <i className="fa-solid fa-plus"></i>
                      <span> Add card</span>
                    </ButtonPrimary>
                  </div>
                  <div>
                    <ButtonCancel onClick={() => setIsInputVisible(false)}>
                      <i className="fa-solid fa-xmark"></i>
                    </ButtonCancel>
                  </div>
                </ButtonContainer>
              </Box>
            ) : (
              <ButtonWrapper>
                <Button onClick={() => setIsInputVisible(true)}>
                  <i className="fa-solid fa-plus"></i>
                  <span> Add another list</span>
                </Button>
              </ButtonWrapper>
            )}
          </BoxContainer>
        </Container>
      )}
    </Wrapper>
  );
};

export default Board;

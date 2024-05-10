import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Container,
  Button,
  CircleButton,
  PopUp,
  PopUpContent,
  ButtonCancelContainer,
  Form,
  Footer,
  ButtonPrimary,
  ButtonCancel,
  ButtonDanger,
  DeleteContent,
  H4,
  DeleteFooter,
  Box,
  TitleInput,
  LabelInput,
  ContainerInput,
  ContainerLabelInput,
  Textarea,
  Input,
  TagInput,
  LabelsContentContainer,
  LabelsWrapper,
  LabelTitle,
  LabelItem,
  Header,
  Span,
  ErrorText,
  TextWrapper,
  TagLabel,
} from "./style";
import api from "../../utils/api";

const Card = ({
  title,
  id,
  description,
  startDate,
  dueDate,
  labels,
  onDelete,
  onEdit,
  allLabels,
  onDrop,
  listId,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCard, setEditedCard] = useState({
    id,
    title,
    description,
    startDate,
    dueDate,
    labels,
  });
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [dueDateError, setDueDateError] = useState(false);
  const [cardLabels, setCardLabels] = useState([]);
  const [tempCardLabels, setTempCardLabels] = useState([]);

  const getCardLabels = () => {
    try {
      const filteredLabels = allLabels.filter((label) =>
        labels.includes(label.id)
      );
      setCardLabels(filteredLabels);
      setTempCardLabels(filteredLabels);
    } catch (e) {
      console.error("Fail to get card labels", e);
    }
  };
  useEffect(() => {
    getCardLabels();
  }, [allLabels, labels]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCard((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const saveEdit = () => {
    const isTitleValid = handleValidation("title");
    const isDueDateValid = handleValidation("dueDate");

    if (isTitleValid && isDueDateValid) {
      const updatedCard = {
        ...editedCard,
        labels: tempCardLabels.map((label) => label.id),
      };
      onEdit(id, updatedCard);
      setIsEditing(false);
    } else {
      console.error("Validation failed. Please check the form for errors.");
    }
  };

  const handleValidation = (fieldName) => {
    let isValid = true;
    if (fieldName === "title") {
      if (editedCard.title === "") {
        setTitleError(true);
        isValid = false;
      } else {
        setTitleError(false);
      }
    }

    if (fieldName === "dueDate") {
      const currentStartDate = new Date(editedCard.startDate);
      const currentDueDate = new Date(editedCard.dueDate);
      currentStartDate.setHours(0, 0, 0, 0);
      currentDueDate.setHours(0, 0, 0, 0);
      if (currentStartDate && currentDueDate) {
        if (currentDueDate.getTime() < currentStartDate.getTime()) {
          setDueDateError(true);
          isValid = false;
        } else {
          setDueDateError(false);
        }
      } else {
        setDueDateError(false);
      }
    }
    return isValid;
  };

  const handleLabelToggle = (labelId) => {
    setTempCardLabels((prev) => {
      if (prev.some((label) => label.id === labelId)) {
        return prev.filter((label) => label.id !== labelId);
      } else {
        return [...prev, allLabels.find((label) => label.id === labelId)];
      }
    });
  };

  //drag and drop handle
  const handleDragStart = (e) => {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ editedCard, listId })
    );
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const { editedCard, listId } = JSON.parse(
      e.dataTransfer.getData("text/plain")
    );
    onDrop(listId, editedCard);
  };

  return (
    <div>
      <div
        draggable
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Wrapper>
          <Header>
            <span>{title}</span>
            <Container>
              <CircleButton onClick={handleEdit}>
                <i className="fa-solid fa-pen"></i>
              </CircleButton>
              <Button onClick={() => setIsDeleting(true)}>
                <i className="fa-solid fa-trash-can"></i>
              </Button>
            </Container>
          </Header>
          <LabelsWrapper>
            {(cardLabels ?? []).map((label) => {
              return (
                <LabelItem
                  key={label.id}
                  style={{ backgroundColor: label.color }}
                >
                  <LabelTitle>{label.title}</LabelTitle>
                </LabelItem>
              );
            })}
          </LabelsWrapper>
        </Wrapper>
      </div>
      {isEditing && (
        <PopUp>
          <PopUpContent>
            <Form onSubmit={(e) => e.preventDefault()}>
              <ButtonCancelContainer>
                <Button onClick={handleCancelEdit}>
                  <i className="fa-solid fa-xmark"></i>
                </Button>
              </ButtonCancelContainer>
              <div>
                <i className="fa-solid fa-table-list"></i>
                <TitleInput
                  name="title"
                  type="text"
                  placeholder="Enter card title"
                  value={editedCard.title}
                  onChange={handleInputChange}
                ></TitleInput>
                <TextWrapper>
                  {titleError && <ErrorText>Title is required!</ErrorText>}
                </TextWrapper>
              </div>
              <ContainerInput>
                <ContainerLabelInput>
                  <i className="fa-solid fa-align-left"></i>
                  <LabelInput htmlFor="description">Description</LabelInput>
                </ContainerLabelInput>
                <Textarea
                  name="description"
                  placeholder="Enter card description"
                  value={editedCard.description}
                  onChange={handleInputChange}
                ></Textarea>
              </ContainerInput>
              <ContainerInput>
                <ContainerLabelInput>
                  <i className="fa-solid fa-calendar-days"></i>
                  <LabelInput htmlFor="startDate">Start Date</LabelInput>
                </ContainerLabelInput>
                <Input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={editedCard.startDate}
                  onChange={handleInputChange}
                ></Input>
              </ContainerInput>
              <ContainerInput>
                <ContainerLabelInput>
                  <i className="fa-solid fa-calendar-days"></i>
                  <LabelInput htmlFor="dueDate">Due Date</LabelInput>
                </ContainerLabelInput>
                <Input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={editedCard.dueDate}
                  onChange={handleInputChange}
                ></Input>
                <TextWrapper>
                  {dueDateError && (
                    <ErrorText>
                      Due date must be greater or equal than start date!
                    </ErrorText>
                  )}
                </TextWrapper>
              </ContainerInput>
              <ContainerInput>
                <ContainerLabelInput>
                  <i className="fa-solid fa-tags"></i>
                  <LabelInput htmlFor="labels">Labels</LabelInput>
                </ContainerLabelInput>
                <LabelsContentContainer>
                  {allLabels.map((label) => (
                    <label key={label.id}>
                      <input
                        type="checkbox"
                        name={label.title}
                        value={label.id}
                        checked={tempCardLabels.some(
                          (tempCardLabel) => tempCardLabel.id === label.id
                        )}
                        onChange={() => handleLabelToggle(label.id)}
                      />
                      <LabelTitle style={{ backgroundColor: `${label.color}` }}>
                        {label.title}
                      </LabelTitle>
                    </label>
                  ))}
                </LabelsContentContainer>
              </ContainerInput>
              <Footer>
                <div>
                  <ButtonCancel onClick={handleCancelEdit}>
                    <span>Cancel</span>
                  </ButtonCancel>
                </div>
                <div>
                  <ButtonPrimary type="button" onClick={() => saveEdit()}>
                    <span>Save</span>
                  </ButtonPrimary>
                </div>
              </Footer>
            </Form>
          </PopUpContent>
        </PopUp>
      )}
      {isDeleting && (
        <PopUp>
          <PopUpContent>
            <Box>
              <ButtonCancelContainer>
                <Button onClick={() => setIsDeleting(false)}>
                  <i className="fa-solid fa-xmark"></i>
                </Button>
              </ButtonCancelContainer>
              <H4>Delete card?</H4>
              <DeleteContent>
                All actions will be removed from the activity feed and you won’t
                be able to re-open the card. There is no undo.
              </DeleteContent>
              <DeleteFooter>
                <div>
                  <ButtonCancel onClick={() => setIsDeleting(false)}>
                    <span>Cancel</span>
                  </ButtonCancel>
                </div>
                <div>
                  <ButtonDanger onClick={onDelete}>
                    <span>Delete</span>
                  </ButtonDanger>
                </div>
              </DeleteFooter>
            </Box>
          </PopUpContent>
        </PopUp>
      )}
    </div>
  );
};

export default Card;

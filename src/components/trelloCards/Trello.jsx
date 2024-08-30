import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "./lists/CardList";
import TrelloForm from "./TrelloForm";
import {
  handleCloseCard,
  handleOpenCard,
} from "../../store/slices/trelloSlice";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

const Trello = () => {
  const { tasks, openCard } = useSelector((state) => state.trello);
  console.log("tasks: ", tasks);
  const dispatch = useDispatch();
  const openCardHandler = () => {
    dispatch(handleOpenCard());
  };
  const closeCardHandler = () => {
    dispatch(handleCloseCard());
  };

  return (
    <StyledDiv>
      <StyledWrapperCard>
        {" "}
        {tasks.map((item) => (
          <CardList key={item.id} {...item} />
        ))}
      </StyledWrapperCard>
      <div>{openCard && <TrelloForm closeHandler={closeCardHandler} />}</div>
      <div>
        <StyledButton onClick={openCardHandler}>
          <FiPlus />
          {tasks.length == 0 ? "Добавить список" : "Добавьте еще одну колонку"}
        </StyledButton>
      </div>
    </StyledDiv>
  );
};

export default Trello;
const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  padding: 2rem;
  overflow-x: auto;
`;
const StyledButton = styled.button`
  border: none;
  width: fit-content;
  padding: 7px;
  height: 45px;
  border-radius: 8px;
  background-color: #b22b73;
  color: #fff;
  font-size: 14px;
`;
const StyledWrapperCard = styled.ul`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;

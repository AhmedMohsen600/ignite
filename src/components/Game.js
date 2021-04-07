import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, image, id, released }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p> {released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  height: 75%;
  transition: 0.3s;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
  text-align: center;
  border-radius: 1.1rem;
  width: 95%;

  /* h3,
  p {
    padding: 0.7rem 0rem;
  } */

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.7);
    transform: scale(1.1);
  }
  img {
    width: 100%;
    height: 35vh;
    border-radius: 0.1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    transition: 0.3s;
    object-fit: cover;
    :hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
    }
  }
`;
export default Game;

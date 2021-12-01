import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { loadDetail } from "../action/detailAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Game = ({ name, image, id, released }) => {
  const dispatch = useDispatch();
  // const screenshotData = useSelector((state) => state.detail.screen);
  const stringPathId = id.toString();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id, true));
    document.body.style.overflow = "hidden";
    document.body.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    document.body.style.transition = "4s";
  };
  return (
    <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <motion.p> {released}</motion.p>
        <motion.img
          layoutId={`image ${stringPathId} `}
          src={image}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};
const StyledGame = styled(motion.div)`
  height: 75%;
  transition: 0.3s;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
  text-align: center;
  border-radius: 1.1rem;
  width: 94%;
  cursor: pointer;
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
    border-bottom-right-radius: 1.1rem;
    border-bottom-left-radius: 1.1rem;
    :hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
    }
  }
`;
export default Game;

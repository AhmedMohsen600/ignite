import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router";
import { resizeImage } from "../util";
// <platfroms> \\
import playstation from "../img/playstation.svg";
import apple from "../img/apple.svg";
import xbox from "../img/xbox.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
// <platfroms />
import steam from "../img/steam.svg";
// <stars> \\
import emptyStar from "../img/star-empty.png";
import fullStar from "../img/star-full.png";
// <stars />
const GameDetail = ({ pathId }) => {
  const { game, screen, isLoading } = useSelector((state) => state.detail);
  const history = useHistory();
  const dispatch = useDispatch();
  const getPlatfrom = (platfrom) => {
    switch (platfrom) {
      case "PlayStation":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "ios":
        return apple;
      default:
        return gamepad;
    }
  };

  const getStars = () => {
    const star = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) star.push(<img alt="star" key={i} src={fullStar}></img>);
      else star.push(<img alt="star" key={i} src={emptyStar}></img>);
    }
    return star;
  };

  const handelrClick = (e) => {
    const element = e.target.classList;
    if (element.contains("shadow")) {
      document.body.style.overflow = "auto";
      document.body.style.backgroundColor = "white";
      document.body.style.transition = "0s";
      history.push("/");
      dispatch({
        type: "GET_DETAIL",
        payload: {
          isLoading: !isLoading,
        },
      });
    }
  };
  return (
    isLoading && (
      <CardShadow layoutId={pathId} className="shadow" onClick={handelrClick}>
        <Detail>
          <Stats>
            <Rating>
              <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
              {getStars()}
            </Rating>
            <Info>
              <h3>Platforms</h3>
              <Platforms>
                {game.platforms.map((data) => (
                  <motion.img
                    alt={data.platform.name}
                    src={getPlatfrom(data.platform.name)}
                    key={data.platform.id}
                  />
                ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            <img
              src={resizeImage(game.background_image, 1280)}
              alt={game.background_image}
            />
          </Media>
          <Description>
            <p>{game.description_raw}</p>
          </Description>
          <div>
            {screen.map((screen) => (
              <img
                key={screen.id}
                src={resizeImage(screen.image, 1280)}
                alt={game.image}
              />
            ))}
          </div>
          {game.clip ? (
            <video
              src={game.clip.clip}
              typeof="video/mp4"
              width="100%"
              controls
              style={{ marginTop: "3rem" }}
            ></video>
          ) : (
            <h2>This Game Dosen't have trailer. 😔💔</h2>
          )}
        </Detail>
      </CardShadow>
    )
  );
};
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 5;
  overflow-y: scroll;
  /* background-color: rgb(0, 0, 0, 0.5); */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: pink;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;
const Detail = styled(motion.div)`
  width: 85%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  position: absolute;
  cursor: default;
  left: 7%;
  text-align: center;
  background-color: white;
  img {
    width: 100%;
    object-fit: cover;
  }
  h3,
  p {
    color: black;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Rating = styled(motion.div)`
  text-align: center;
  margin: 1.3rem 0rem;
  img {
    width: 1.8rem;
    height: 1.8rem;
    display: inline;
    margin-top: 1rem;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
  h3 {
    margin: 0.3rem 0rem;
  }
`;
const Platforms = styled(motion.div)`
  display: flex;
  text-align: center;
  img {
    margin-left: 1.3rem;
    width: 2.4rem;
    height: 2.4rem;
  }
`;
const Media = styled(motion.div)`
  margin: 2rem 0rem;
  img {
    height: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 1rem 0rem;
  P {
    color: black;
  }
`;
export default GameDetail;

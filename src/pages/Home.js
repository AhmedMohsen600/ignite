import { useSelector, useDispatch } from "react-redux";
import { React, useEffect } from "react";
import { loadGames } from "../action/gamesAction";
import GameDetail from "../components/GameDetail";
//  components
import Game from "../components/Game";
// styled components and framer motion
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// useLocation from react router.
import { useLocation } from "react-router";
import Nav from "../components/Nav";

import { fadeIn } from "../animation";
const Home = () => {
  const { popular, newGames, upcoming, loading, search } = useSelector(
    (state) => state.games
  );
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  useEffect(() => {
    if (typeof pathId === "undefined") {
      document.body.style.overflow = "auto";
      document.body.style.backgroundColor = "white";
      document.body.style.transition = "0s";
    } else if (typeof pathId === "number") {
      document.body.style.overflow = "hidden";
      document.body.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
      document.body.style.transition = "4s";
    }
  }, [pathId]);
  return loading ? (
    <h2
      style={{
        color: "#fe7675",
        fontSize: "3rem",
        textAlign: "center",
        marginTop: "5rem",
      }}
    >
      Loading...
    </h2>
  ) : (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout>
        <Nav />
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {search.length ? (
          <div className="search">
            <h2>Searched games</h2>
            <Games>
              {search.map((game) => (
                <Game
                  key={game.id}
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
        <h2>Popular games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
        <h2>New games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};
const GameList = styled(motion.div)`
  padding: 1rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export default Home;

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadGames } from "../action/gamesAction";
//  components
import Game from "../components/Game";
// styled components and framer motion
import styled from "styled-components";

import { motion } from "framer-motion";
const Home = () => {
  const { popular, newGames, upcoming, loading } = useSelector(
    (state) => state.games
  );
  const dispatch = useDispatch();
  console.log(newGames);
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  return loading ? (
    <h2 style={{ fontSize: "3rem", textAlign: "center", marginTop: "5rem" }}>
      Loading...
    </h2>
  ) : (
    <GameList>
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
`;
export default Home;

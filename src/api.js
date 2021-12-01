const apiKey = "5074e6f06e3c46f79a74e72c2fc49f66";

const baseURL = "https://api.rawg.io/api/";

// Getting the date.
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) return `0${month}`;
  else return month;
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) return `0${day}`;
  else return day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popularGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
export const popularGamesURL = () => `${baseURL}${popularGames}`;
export const upcomingGamesURL = () => `${baseURL}${upcomingGames}`;
export const newGamesURL = () => `${baseURL}${newGames}`;
export const gameDetailsURL = (game_id) =>
  `${baseURL}games/${game_id}?key=${apiKey}`;
export const gameScreenShotURL = (game_id) =>
  `${baseURL}games/${game_id}/screenshots?key=${apiKey}`;
export const gameSearchURL = (game_name) =>
  `${baseURL}games?key=${apiKey}&search=${game_name}&page_size=9`;

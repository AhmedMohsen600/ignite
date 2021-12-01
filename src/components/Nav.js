import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../action/gamesAction";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const searchInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearch = () => {
    dispatch({
      type: "CLEAR_SEARCH",
    });
  };
  return (
    <StyleNav>
      <Logo onClick={clearSearch}>
        <h1>Ignite</h1>
        <img src={logo} alt="ignite" />
      </Logo>
      <SearchInput>
        <form>
          <input onChange={searchInputHandler} type="text" value={textInput} />
          <button onClick={submitHandler} type="submit">
            Search
          </button>
        </form>
      </SearchInput>
    </StyleNav>
  );
};

const StyleNav = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  img {
    margin: 1rem 0rem;
    width: 2rem;
    height: 2rem;
  }
`;
const SearchInput = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    width: 100%;
  }
  width: 37%;
  input {
    padding: 0.5rem;
    width: 100%;
    border: none;
    outline: none;
    font-size: 1.2rem;
    font-weight: bold;
    transition: 0.5s;
    box-shadow: 0px 0px 30px rgb(0, 0, 0, 0.2);
  }
  button {
    padding: 0.5rem 1.2rem;
    border: none;
    background-color: #fe7675;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  cursor: pointer;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
export default Nav;

import { Route, Routes } from "react-router-dom";
import { getAllChars } from "./redux/actions";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import "./App.css";
import Detail from "./components/Detail/Detail";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllChars());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/characters/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

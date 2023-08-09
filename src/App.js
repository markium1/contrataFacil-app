import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header/Header";

import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <Container className="p-3">
        <Outlet />
      </Container>
    </>
  );
};

export default App;

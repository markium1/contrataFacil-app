import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header/Header";
import TableServicos from "./Components/TableServicos/TableServicos";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <TableServicos />
      </Container>
    </>
  );
};

export default App;

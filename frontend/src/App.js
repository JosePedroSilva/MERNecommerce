// STYLES
import { Container } from "react-bootstrap";
// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <h1>MERN APP</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;

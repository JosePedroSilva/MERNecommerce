// STYLES
import { Container } from "react-bootstrap";
// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;

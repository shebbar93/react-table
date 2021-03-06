import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container fluid>
          <Home/>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;

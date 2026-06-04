import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import OutputPage from "./pages/OutputPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/result" element={<OutputPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
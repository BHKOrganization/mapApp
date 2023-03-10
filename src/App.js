import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AddQuestionPage from "./pages/AddQuestionPage";
import FAQPage from "./pages/FAQPage";
import { Route } from "react-router-dom";
import GamePage from "./pages/GamePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="addquestion" element={<AddQuestionPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="game-map" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router";
import "./App.css";
import { HomePage } from "./pages/home/home-page";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pepe" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

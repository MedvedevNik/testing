import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage";
import FinalPage from "./pages/FinalPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </Router>
  );
};

export default App;

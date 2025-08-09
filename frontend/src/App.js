import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { SearchProvider } from "./context/SearchContext";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;
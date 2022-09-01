import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/footer";
import { FavoritePokemonsProvider } from "./contexts/favoritesContext";
import HomePage from "./pages/homePage";
import FavoritesPage from "./pages/favoritesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <FavoritePokemonsProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<HomePage />} />

            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
          <Footer />
        </Router>
      </FavoritePokemonsProvider>
    </ChakraProvider>
  );
}

export default App;

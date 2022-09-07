import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/footer";
import HomePage from "./pages/homePage";
import FavoritesPage from "./pages/favoritesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoriteProvider from "./contexts/FavoriteContext";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  return (
    <ChakraProvider>
      <FavoriteProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
          <Footer />
        </Router>
      </FavoriteProvider>
    </ChakraProvider>
  );
}

export default App;

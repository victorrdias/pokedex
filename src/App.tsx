import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { ChakraProvider, Image } from "@chakra-ui/react";
import Footer from "./components/footer";
import HomePage from "./pages/homePage";
import FavoritesPage from "./pages/favoritesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoriteProvider from "./contexts/FavoriteContext";
import PokemonDetail from "./pages/PokemonDetail";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <ChakraProvider>
      <FavoriteProvider>
        <Router>
          <Image
            src="./assets/bgpokedex3.jpg"
            zIndex="-1"
            position="absolute"
            minW="100%"
            minH="100%"
            objectFit="cover"
            top="0"
          />
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

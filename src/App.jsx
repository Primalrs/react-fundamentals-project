import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { Container } from "@chakra-ui/react";

export const App = () => {
  // Your state code here
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  return (
    <>
      <Container maxW="container.xl" p={{ base: 4, md: 6 }}>
        Your Recipe App
      </Container>
      {selectedRecipe ? (
        <RecipePage
          selectedRecipe={selectedRecipe}
          onRecipeClick={setSelectedRecipe}
        />
      ) : (
        <RecipeListPage onRecipeClick={setSelectedRecipe} />
      )}
    </>
  );
};

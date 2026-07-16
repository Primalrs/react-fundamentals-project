import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";

export const App = () => {
  // Your state code here
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  return (
    <>
      <Container maxW="container.xl" p={{ base: 4, md: 6 }}>
        <Flex justify="space-between" align="center">
          <Heading>Your Recipe App</Heading>

          <ColorModeButton />
        </Flex>
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

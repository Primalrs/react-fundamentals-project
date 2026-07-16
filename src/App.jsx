import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { Container, Flex, Heading, Box, IconButton } from "@chakra-ui/react";
import { ColorModeButton, useColorModeValue } from "./components/ui/color-mode";
import { LuArrowLeft } from "react-icons/lu";

export const App = () => {
  // Your state code here
  const bg = useColorModeValue("#F7F3EC", "gray.900");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <>
      <Box bg={bg} minH="100vh">
        <Container
          maxW={selectedRecipe ? "750px" : "container.xl"}
          p={{ base: 4, md: 6 }}
        >
          {" "}
          <Flex justify="space-between" align="center">
            {selectedRecipe ? (
              <IconButton
                aria-label="Back"
                variant="ghost"
                onClick={() => setSelectedRecipe(null)}
              >
                <LuArrowLeft />
              </IconButton>
            ) : (
              <Box w="40px" />
            )}
            <Heading>Your Recipe App</Heading>

            <ColorModeButton />
          </Flex>
          {selectedRecipe ? (
            <RecipePage selectedRecipe={selectedRecipe} />
          ) : (
            <RecipeListPage onRecipeClick={setSelectedRecipe} />
          )}
        </Container>
      </Box>
    </>
  );
};

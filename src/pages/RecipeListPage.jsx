import { useState } from "react";
import { SimpleGrid, Stack, Input, Text, Box, Center } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/RecipeCard";
export const RecipeListPage = ({ onRecipeClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredRecipes = data.hits.filter(({ recipe }) => {
    if (!normalizedSearchTerm) return true;

    const labelMatch = recipe.label
      .toLowerCase()
      .includes(normalizedSearchTerm);
    const healthLabelMatch = recipe.healthLabels.some((healthLabel) =>
      healthLabel.toLowerCase().includes(normalizedSearchTerm),
    );

    return labelMatch || healthLabelMatch;
  });

  return (
    <Stack spacing={6}>
      <Center>
        <Box maxW="70%" w="100%">
          <Input
            placeholder="Search recipes"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Box>
      </Center>
      {filteredRecipes.length === 0 ? (
        <Text>No recipes found for that name or health label.</Text>
      ) : (
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          spacing={8}
          rowGap={8}
          px={{ base: 2, md: 4, lg: 6 }}
          py={{ base: 2, md: 4, lg: 6 }}
        >
          {filteredRecipes.map(({ recipe }) => (
            <RecipeCard
              key={recipe.label}
              recipe={recipe}
              onRecipeClick={onRecipeClick}
            />
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
};

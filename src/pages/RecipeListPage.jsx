import { useState } from "react";
import { SimpleGrid, Stack, Input, Text } from "@chakra-ui/react";
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
      <Input
        placeholder="Search recipes by name or health label"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {filteredRecipes.length === 0 ? (
        <Text>No recipes found for that name or health label.</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
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

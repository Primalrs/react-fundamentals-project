import {   SimpleGrid,  } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/RecipeCard";
export const RecipeListPage = ({ onRecipeClick }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
      {data.hits.map(({ recipe }) => (
        <RecipeCard
          key={recipe.label}
          recipe={recipe}
          onRecipeClick={onRecipeClick}
        />
      ))}
    </SimpleGrid>
  );
};

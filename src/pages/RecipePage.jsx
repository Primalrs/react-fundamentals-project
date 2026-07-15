import { Text, Button } from "@chakra-ui/react";
export const RecipePage = ({ selectedRecipe, onRecipeClick }) => {
  return (
    <>
      <Text>Recipe Page</Text>
      <Button onClick={() => onRecipeClick(null)}>Back</Button>
    </>
  );
};

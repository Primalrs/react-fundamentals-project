import { Card, Image, Stack, Heading, Text, Box } from "@chakra-ui/react";
export const RecipeCard = ({ recipe, onRecipeClick }) => {
  return (
    <Card.Root
      borderRadius="xl"
      w="full"
      h="auto"
      onClick={() => onRecipeClick(recipe)}
      cursor="pointer"
      _hover={{ transform: "scale(1.01)" }}
      transition="transform 0.15s ease"
    >
      <Card.Body>
        <Box
          w="full"
          aspectRatio={{ base: 16 / 9, md: 4 / 3 }}
          overflow="hidden"
          borderRadius="xl"
        >
          <Image src={recipe.image} w="full" h="full" objectFit="cover" />
        </Box>

        <Stack mt={{ base: 4, md: 6 }} gap={{ base: 2, md: 3 }}>
          <Heading size={{ base: "sm", md: "md" }}>{recipe.label}</Heading>
          <Text noOfLines={{ base: 3, md: 2 }}>
            Meal Type: {recipe.mealType.join(", ")}
          </Text>
          {recipe.dietLabels.length > 0 && (
            <Text noOfLines={{ base: 3, md: 2 }}>
              Diet label: {recipe.dietLabels.join(", ")}
            </Text>
          )}
          {recipe.cautions.length > 0 && (
            <Text noOfLines={{ base: 3, md: 2 }}>
              Cautions: {recipe.cautions.join(", ")}
            </Text>
          )}
          <Text noOfLines={{ base: 3, md: 2 }}>
            Dish Type: {recipe.dishType.join(", ")}
          </Text>
          <Text noOfLines={{ base: 3, md: 2 }}>
            Vegan: {recipe.healthLabels.includes("Vegan") ? "Yes" : "No"}
          </Text>
          <Text noOfLines={{ base: 3, md: 2 }}>
            Vegetarian:{" "}
            {recipe.healthLabels.includes("Vegetarian") ? "Yes" : "No"}
          </Text>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

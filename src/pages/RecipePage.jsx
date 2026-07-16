import {
  Text,
  Button,
  Image,
  Card,
  Heading,
  List,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect } from "react";

export const RecipePage = ({ selectedRecipe, onRecipeClick }) => {
  console.log(selectedRecipe);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Card.Root borderRadius="xl" w="full" h="auto" cursor="pointer">
      <Card.Body>
        <Image src={selectedRecipe.image} alt={selectedRecipe.label} />
        {/* Recipe IMG */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Stack mt={{ base: 4, md: 6 }} gap={{ base: 2, md: 3 }}>
            <Heading size="md">
              {selectedRecipe.mealType.join(", ").toUpperCase()}
            </Heading>
            <Heading size="xl">{selectedRecipe.label}</Heading>
            {/* Recipe name */}
            <Text>
              {selectedRecipe.totalTime > 0
                ? `Total cooking time: ${selectedRecipe.totalTime} minutes`
                : "Total cooking time: N/A"}
            </Text>
            {/* Recipe Total Time */}
            <Text>Servings: {selectedRecipe.yield}</Text>
            {/* Recipe Servings */}
            <Heading size="md">Ingredients</Heading>
            <List.Root>
              {selectedRecipe.ingredientLines.map((ingredient) => (
                <List.Item key={ingredient}>{ingredient}</List.Item>
              ))}
            </List.Root>
          </Stack>
          <Stack mt={{ base: 4, md: 6 }} gap={{ base: 2, md: 3 }}>
            <Text>
              {"Diet Labels: "}
              {selectedRecipe.dietLabels.length > 0
                ? selectedRecipe.dietLabels.join(", ")
                : "None"}
            </Text>
            {/* Recipe Diet Labels */}
            <Text>
              {"Health Labels: "}
              {selectedRecipe.healthLabels.length > 0
                ? selectedRecipe.healthLabels.join(", ")
                : "None"}
            </Text>
            {/* Recipe Health Labels */}
            <Text>
              Cautions:
              {selectedRecipe.cautions.length > 0
                ? selectedRecipe.cautions.join(", ")
                : "None"}
            </Text>
            {/* Recipe Cautions */}
            <Heading size="md">Total nutrients</Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
              <Stack>
                <Text>{selectedRecipe.calories?.toFixed(0)}</Text>
                <Text>CALORIES</Text>
              </Stack>
              <Stack>
                <Text>
                  {selectedRecipe.totalNutrients?.CHOCDF?.quantity.toFixed(0)}
                </Text>
                <Text>CARBS</Text>
              </Stack>
              <Stack>
                <Text>
                  {selectedRecipe.totalNutrients?.PROCNT?.quantity.toFixed(0)}
                </Text>
                <Text>PROTEIN</Text>
              </Stack>
              <Stack>
                <Text>
                  {selectedRecipe.totalNutrients?.FAT?.quantity.toFixed(0)}
                </Text>
                <Text>FAT</Text>
              </Stack>
              <Stack>
                <Text>
                  {`${selectedRecipe.totalNutrients?.NA?.quantity?.toFixed(0)} ${selectedRecipe.totalNutrients?.NA?.unit}`}
                </Text>
                <Text>CHOLESTEROL</Text>
              </Stack>
              <Stack>
                <Text>
                  {`${selectedRecipe.totalNutrients?.NA?.quantity.toFixed(0)} 
                  ${selectedRecipe.totalNutrients?.NA?.unit}`}
                </Text>
                <Text>SODIUM</Text>
              </Stack>
            </SimpleGrid>
          </Stack>
        </SimpleGrid>
        <Button onClick={() => onRecipeClick(null)}>Back to Recipe List</Button>
        {/* Back to Recipe List Button */}
      </Card.Body>
    </Card.Root>
  );
};

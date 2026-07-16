import {
  Text,
  Image,
  Card,
  Heading,
  List,
  Stack,
  SimpleGrid,
  Box,
  Flex,
  Tag,
} from "@chakra-ui/react";
import { useEffect } from "react";

export const RecipePage = ({ selectedRecipe }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Card.Root borderRadius="xl" w="full" h="auto" cursor="pointer">
      <Card.Body>
        <Box
          w="full"
          h={{ base: "180px", md: "240px" }}
          overflow="hidden"
          borderRadius="xl"
          p="0"
        >
          <Image
            src={selectedRecipe.image}
            alt={selectedRecipe.label}
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="center 20%"
          />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Stack mt={{ base: 4, md: 6 }} gap={{ base: 2, md: 3 }}>
            <Heading size="md" color="gray.500">
              {selectedRecipe.mealType.join(", ").toUpperCase()}
            </Heading>
            <Heading size="xl">{selectedRecipe.label}</Heading>
            {/* Recipe name */}
            <Text size="sm">Dish: {selectedRecipe.dishType}</Text>
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
            {selectedRecipe.dietLabels.length > 0 ? (
              <>
                <Text>Diet labels:</Text>
                <Flex gap={2} wrap="wrap" justify="flex-start">
                  {selectedRecipe.dietLabels.map((dietLabel) => (
                    <Tag.Root key={dietLabel} colorPalette="green">
                      <Tag.Label>{dietLabel.toUpperCase()}</Tag.Label>
                    </Tag.Root>
                  ))}
                </Flex>
              </>
            ) : (
              <Text>Diet labels: None</Text>
            )}
            {/* Recipe Diet Labels */}
            {selectedRecipe.healthLabels.length > 0 ? (
              <>
                <Text>Health labels:</Text>
                <Flex gap={2} wrap="wrap" justify="flex-start">
                  {selectedRecipe.healthLabels.map((healthLabel) => (
                    <Tag.Root key={healthLabel} colorPalette="purple">
                      <Tag.Label>{healthLabel.toUpperCase()}</Tag.Label>
                    </Tag.Root>
                  ))}
                </Flex>
              </>
            ) : (
              <Text>Health labels: None</Text>
            )}
            {/* Recipe Health Labels */}
            {selectedRecipe.cautions.length > 0 ? (
              <>
                <Text>Cautions:</Text>
                <Flex gap={2} wrap="wrap" justify="flex-start">
                  {selectedRecipe.cautions.map((caution) => (
                    <Tag.Root key={caution} colorPalette="red">
                      <Tag.Label>{caution.toUpperCase()}</Tag.Label>
                    </Tag.Root>
                  ))}
                </Flex>
              </>
            ) : (
              <Text>Cautions: None</Text>
            )}
            {/* Recipe Cautions */}
            <Heading size="md">Total nutrients:</Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
              <Stack>
                <Text>{selectedRecipe.calories?.toFixed(0)}</Text>
                <Text fontWeight="semibold" fontSize="sm">
                  CALORIES
                </Text>
              </Stack>
              <Stack>
                <Text>
                  {selectedRecipe.totalNutrients?.CHOCDF?.quantity.toFixed(0)}
                </Text>
                <Text fontWeight="semibold" fontSize="sm">
                  CARBS
                </Text>
              </Stack>
              <Stack>
                <Text>
                  {selectedRecipe.totalNutrients?.PROCNT?.quantity.toFixed(0)}
                </Text>
                <Text fontWeight="semibold" fontSize="sm">
                  PROTEIN
                </Text>
              </Stack>
              <Stack>
                <Text>
                  {selectedRecipe.totalNutrients?.FAT?.quantity.toFixed(0)}
                </Text>
                <Text fontWeight="semibold" fontSize="sm">
                  FAT
                </Text>
              </Stack>
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              <Stack>
                <Text>
                  {`${selectedRecipe.totalNutrients?.CHOLE?.quantity?.toFixed(0)} ${selectedRecipe.totalNutrients?.CHOLE?.unit}`}
                </Text>
                <Text fontWeight="semibold" fontSize="sm">
                  CHOLESTEROL
                </Text>
              </Stack>
              <Stack>
                <Text>
                  {`${selectedRecipe.totalNutrients?.NA?.quantity.toFixed(0)} 
                  ${selectedRecipe.totalNutrients?.NA?.unit}`}
                </Text>
                <Text fontWeight="semibold" fontSize="sm">
                  SODIUM
                </Text>
              </Stack>
            </SimpleGrid>
          </Stack>
        </SimpleGrid>

        {/* Back to Recipe List Button */}
      </Card.Body>
    </Card.Root>
  );
};

import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Box,
  Center,
  Tag,
  Flex,
} from "@chakra-ui/react";
export const RecipeCard = ({ recipe, onRecipeClick }) => {
  return (
    <Card.Root
      borderRadius="xl"
      maxW="275px"
      w="100%"
      maxH="600px"
      h="100%"
      onClick={() => onRecipeClick(recipe)}
      cursor="pointer"
      _hover={{ transform: "scale(1.05)" }}
      transition="transform 0.2s ease"
      shadow="xl"
    >
      <Card.Body p={0}>
        <Box
          w="full"
          aspectRatio={{ base: 16 / 9, md: 4 / 3 }}
          overflow="hidden"
          borderTopRadius="xl"
        >
          <Image src={recipe.image} w="full" h="full" objectFit="cover" />
        </Box>
        <Center>
          <Stack
            mt={{ base: 3, md: 3 }}
            gap={{ base: 2, md: 2 }}
            align={"center"}
            textAlign={"center"}
          >
            <Text
              fontSize="xs"
              fontWeight="bold"
              textTransform="uppercase"
              color="gray.500"
            >
              {recipe.mealType.join(", ")}
            </Text>
            <Heading size={{ base: "md", md: "md" }} lineHeight="short">
              {recipe.label}
            </Heading>
            {recipe.healthLabels.some(
              (label) => label === "Vegan" || label === "Vegetarian",
            ) && (
              <Flex gap={2} wrap="wrap" justify="center">
                {recipe.healthLabels
                  .filter(
                    (label) => label === "Vegan" || label === "Vegetarian",
                  )
                  .map((healthLabel) => (
                    <Tag.Root key={healthLabel} colorPalette="purple">
                      <Tag.Label>{healthLabel.toUpperCase()}</Tag.Label>
                    </Tag.Root>
                  ))}
              </Flex>
            )}

            {recipe.dietLabels.length > 0 && (
              <Flex gap={2} wrap="wrap" justify="center">
                {recipe.dietLabels.map((dietLabel) => (
                  <Tag.Root key={dietLabel} colorPalette="green">
                    <Tag.Label>{dietLabel.toUpperCase()}</Tag.Label>
                  </Tag.Root>
                ))}
              </Flex>
            )}

            <Text>
              Dish:{" "}
              <Text as="span" fontWeight="semibold">
                {recipe.dishType.join(", ")}
              </Text>
            </Text>

            {recipe.cautions.length > 0 && (
              <>
                <Text>Cautions</Text>
                <Flex gap={2} wrap="wrap" justify="center">
                  {recipe.cautions.map((caution) => (
                    <Tag.Root key={caution} colorPalette="red">
                      <Tag.Label>{caution.toUpperCase()}</Tag.Label>
                    </Tag.Root>
                  ))}
                </Flex>
              </>
            )}
          </Stack>
        </Center>
      </Card.Body>
    </Card.Root>
  );
};

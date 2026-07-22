import { Card, SimpleGrid } from "@chakra-ui/react";

const CARDS = [
  { title: "12", subtitle: "Owners" },
  { title: "24", subtitle: "Animals" },
  { title: "8", subtitle: "Month appointments" },
];

export default function Cards() {
  return (
    <SimpleGrid columns={{ base: 1, sm: 1, md: 1 }} gap="4" mt="6">
      {CARDS.map(({ title, subtitle }) => (
        <Card.Root
          key={subtitle}
          _hover={{ shadow: "md" }}
          transition="box-shadow 0.2s"
        >
          <Card.Body textAlign="center" gap="1">
            <Card.Title fontSize="4xl" fontWeight="bold">
              {title}
            </Card.Title>
            <Card.Description fontSize="md">{subtitle}</Card.Description>
          </Card.Body>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
}

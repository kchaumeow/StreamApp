import { Card, Text, Heading } from "@chakra-ui/react";

export default function AudioCard({ name, desc }) {
  return (
    <Card maxW="sm" bgColor="#242424">
      <Heading
        size="md"
        className="blackBlock"
        fontSize="x-large"
        pt={3}
        pl={3}
        pr={3}
        borderTopRadius="lg"
      >
        {name}
      </Heading>
      <Text className="blackBlock" p={3} borderBottomRadius="lg">
        {desc}
      </Text>
    </Card>
  );
}

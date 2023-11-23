import { Card, Text, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function RoomCard({ id, desc }) {
  return (
    <Link to={`/rooms/${id}`}>
      <Card
        maxW="sm"
        border="1px"
        borderColor="#55bd79"
        overflow="hidden"
        borderRadius="lg"
      >
        <Heading
          size="md"
          className="blackBlock"
          fontSize="x-large"
          pt={3}
          pl={3}
          pr={3}
        >
          {id}
        </Heading>
        <Image src={`https://cataas.com/cat/says/${id}?fontSize=16`} />
      </Card>
    </Link>
  );
}

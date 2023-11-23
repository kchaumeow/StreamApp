import { Card, Text, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function RoomCard({ id }) {
  return (
    <Link to={`/rooms/${id}`}>
      <Card
        maxW="sm"
        border="1px"
        borderColor="#55bd79"
        overflow="hidden"
        borderRadius="lg"
      >
        <Image
          src={`https://cataas.com/cat/says/${id}?fontSize=20&type=square&height=100&width=100`}
        />
      </Card>
    </Link>
  );
}

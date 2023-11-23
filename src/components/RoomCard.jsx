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
        <Heading padding={3} className="grayBlock">
          {id}
        </Heading>
        <Image
          src={`https://cataas.com/cat/says/${id}?fontSize=25&type=square&height=100&width=100`}
          width={100}
          height={100}
          objectFit="cover"
          objectPosition="center"
        />
      </Card>
    </Link>
  );
}

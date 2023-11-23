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
        width={250}
      >
        <Heading padding={3} className="grayBlock">
          {id}
        </Heading>
        <Image
          src={`https://cataas.com/cat/says/${id}?fontSize=25&type=square&height=250&width=250&fontColor=#55bd79`}
          width={250}
          height={250}
          objectFit="cover"
          objectPosition="center"
        />
      </Card>
    </Link>
  );
}

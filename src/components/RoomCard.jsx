import { Card, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function RoomCard({ id, name }) {
  return (
    <Link to={`/rooms/${id}`}>
      <Card
        border="1px"
        borderColor="#55bd79"
        overflow="hidden"
        borderRadius="lg"
        width={300}
        height={356}
      >
        <Heading padding={3} className="blackBlock" height={56}>
          {name}
        </Heading>
        <Image
          src={`https://cataas.com/cat/says/${id}?fontSize=25&type=square&height=300&width=300&fontColor=orange`}
          width={300}
          height={300}
          objectFit="cover"
          objectPosition="center"
        />
      </Card>
    </Link>
  );
}

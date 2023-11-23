import { Card, Heading, Image } from "@chakra-ui/react";
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
        width={300}
        height={306}
      >
        <Heading padding={3} className="grayBlock" height={56}>
          {id}
        </Heading>
        <Image
          src={`https://cataas.com/cat?type=square&height=250&width=250`}
          width={300}
          height={250}
          objectFit="cover"
          objectPosition="center"
        />
      </Card>
    </Link>
  );
}

import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function Room() {
  const { id } = useParams();
  return <Heading>Room {id}</Heading>;
}

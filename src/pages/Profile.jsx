import { Heading, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getUserByIdReq } from "../api";
export default function Profile() {
  const id = useParams().id;
  console.log(id);
  const user = getUserByIdReq(id);
  console.log(user);
  return (
    <Stack direction="column" gap={2} placeItems="center" className="grayBlock">
      <Heading className="grayBlock">{user.name}</Heading>
      <Heading className="grayBlock">{user.email}</Heading>
    </Stack>
  );
}

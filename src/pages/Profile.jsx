import { Heading, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getUserByIdReq } from "../api";
export default function Profile() {
  const id = useParams().id;
  console.log(id);
  let user = null;
  try {
    getUserByIdReq(id).then((res) => console.log(res));
    console.log(user);
  } catch (err) {
    console.log(err);
  }
  return (
    <Stack direction="column" gap={2} placeItems="center" className="grayBlock">
      <Heading className="grayBlock">{user.name}</Heading>
      <Heading className="grayBlock">{user.email}</Heading>
    </Stack>
  );
}

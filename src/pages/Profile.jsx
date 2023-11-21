import { Heading, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
export default function Profile() {
  const id = useParams().id;
  console.log(id);
  let user = null;
  try {
    user = getUserByIdReq(id).then((res) => res);
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

import { Heading, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Profile() {
  let user = null;
  useEffect(() => {
    try {
      user = getUserByIdReq().then((res) => res);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  });
  return (
    <Stack direction="column" gap={2} placeItems="center" className="grayBlock">
      <Heading className="grayBlock">{user.name}</Heading>
      <Heading className="grayBlock">{user.email}</Heading>
    </Stack>
  );
}

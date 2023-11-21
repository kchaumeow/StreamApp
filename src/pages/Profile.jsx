import { Heading, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getUserByIdReq } from "../api";
import { useEffect } from "react";

export default function Profile() {
  const id = useParams().id;
  console.log(id);
  let user;
  useEffect(() => {
    getUserByIdReq(id).then((res) => (user = res));
  }, []);
  console.log(user);
  return (
    <Stack direction="column" gap={2} placeItems="center" className="grayBlock">
      <Heading className="grayBlock">{user.name}</Heading>
      <Heading className="grayBlock">{user.email}</Heading>
    </Stack>
  );
}

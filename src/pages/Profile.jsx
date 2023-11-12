import { Heading, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
const user = {
  id: 1,
  username: "Edward",
  email: "ed@gmail.com",
};
export default function Profile() {
  const { id } = useParams();
  return (
    <Stack direction="column" gap={2} placeItems="center" className="grayBlock">
      <Heading className="grayBlock">{user.username}</Heading>
      <Heading className="grayBlock">{user.email}</Heading>
    </Stack>
  );
}

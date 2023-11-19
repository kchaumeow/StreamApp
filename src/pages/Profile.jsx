import { Heading, Stack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { userSelector } from "../store/selectors";
export default function Profile() {
  const user = useSelector(userSelector);
  return (
    <Stack direction="column" gap={2} placeItems="center" className="grayBlock">
      <Heading className="grayBlock">{user.name}</Heading>
      <Heading className="grayBlock">{user.email}</Heading>
    </Stack>
  );
}

import { Heading, Spinner, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getUserByIdReq } from "../api";
import { useEffect } from "react";
import { useState } from "react";

export default function Profile() {
  const id = useParams().id;
  const [user, setUser] = useState();
  useEffect(() => {
    getUserByIdReq(id).then((res) => setUser(res));
  }, []);
  return (
    <>
      {user ? (
        <Stack
          direction="column"
          gap={2}
          placeItems="center"
          className="grayBlock"
        >
          <Heading className="grayBlock">{user.name}</Heading>
          <Heading className="grayBlock">{user.email}</Heading>
        </Stack>
      ) : (
        <Spinner
          thickness="4px"
          className="grayBlock"
          speed="0.65s"
          emptyColor="gray.200"
          color="green.500"
          size="xl"
        />
      )}
    </>
  );
}

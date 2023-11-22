import { Card, CardBody, Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Chat from "../components/Chat";

export default function Room() {
  const { id } = useParams();
  return (
    <Box className="grayBlock" display="flex" justifyContent="center">
      <Card
        w="90%"
        className="blackBlock"
        overflow="hidden"
        borderRadius="lg"
        border="4px"
        borderColor="#2f3235"
      >
        <Heading
          className="blackBlock"
          color="gray"
          size="lg"
          pt={3}
          pl={3}
          pr={3}
        >
          {id}
        </Heading>
        <CardBody className="blackBlock">
          <Chat />
        </CardBody>
      </Card>
    </Box>
  );
}

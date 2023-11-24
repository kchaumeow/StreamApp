import { Card, CardBody, Box, Heading, Progress } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Chat from "../components/Chat";
import { useState } from "react";

export default function Room() {
  const [progress, setProgress] = useState(0);
  setInterval(() => setProgress(progress + 1), 1000);
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
        <Progress colorScheme="green" size="lg" value={progress} />
        <CardBody className="blackBlock">
          <Chat />
        </CardBody>
      </Card>
    </Box>
  );
}

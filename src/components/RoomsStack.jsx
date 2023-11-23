import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import RoomCard from "./RoomCard";
import ModalCreateRoom from "./ModalCreateRoom";
import { useSelector } from "react-redux";
import { roomsSelector, userSelector } from "../store/selectors";

export default function RoomsStack() {
  const user = useSelector(userSelector);
  const rooms = useSelector(roomsSelector);
  return (
    <Stack className="grayBlock" placeItems="center" spacing={15}>
      {user ? (
        <>
          <Stack
            direction="row"
            flexWrap="wrap"
            w="70%"
            alignItems="center"
            gap={5}
          >
            {rooms.map((room) => {
              return <RoomCard key={room.id} id={room.name} desc={room.desc} />;
            })}
          </Stack>
          <ModalCreateRoom />
        </>
      ) : (
        <Box textAlign="center" py={10} px={6} className="grayBlock">
          <Heading
            display="inline-block"
            as="h2"
            size="2xl"
            bgGradient="linear(to-r, green.400, green.600)"
            backgroundClip="text"
          >
            Unauthorised
          </Heading>
          <Text fontSize="18px" color={"gray.500"} mt={4}>
            Login or Register to continue
          </Text>
        </Box>
      )}
    </Stack>
  );
}

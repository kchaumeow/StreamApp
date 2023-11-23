import { Stack } from "@chakra-ui/react";
import RoomCard from "./RoomCard";
import ModalCreateRoom from "./ModalCreateRoom";

export default function RoomsStack({ rooms }) {
  return (
    <Stack className="grayBlock" placeItems="center" gap={3}>
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
    </Stack>
  );
}

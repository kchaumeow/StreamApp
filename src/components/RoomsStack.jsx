import { Stack } from "@chakra-ui/react";
import RoomCard from "./RoomCard";
import ModalCreateRoom from "./ModalCreateRoom";

export default function RoomsStack({room, user}) {
  return (
    <Stack className="grayBlock" placeItems="center" spacing={15}>
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
      {user && <ModalCreateRoom />}
    </Stack>
  );
}
